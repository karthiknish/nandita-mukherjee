import { NextResponse } from "next/server";
import { createClient } from "contentful-management";

// WARNING: This endpoint needs proper authentication before exposing submission data.
// The Contentful Management Token has write access and should be handled with extreme care.
// Consider using a read-only Content Delivery API token if possible for fetching data.

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT_ID = "master"; // Usually 'master'
const CONTENTFUL_CONTENT_TYPE_ID = "naditaContact";

export async function GET(request) {
  // TODO: Implement robust authentication check here.
  // Example: Verify a session token if you implement session-based auth.
  // For now, this is open, which is a security risk.

  if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN || !CONTENTFUL_SPACE_ID) {
    console.error("Contentful Management Token or Space ID is not configured.");
    return NextResponse.json(
      { success: false, message: "Server configuration error." },
      { status: 500 }
    );
  }

  try {
    const space = await client.getSpace(CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT_ID);

    const response = await environment.getEntries({
      content_type: CONTENTFUL_CONTENT_TYPE_ID,
      order: "-sys.createdAt", // Order by most recent first
    });

    const submissions = response.items.map((item) => ({
      id: item.sys.id,
      // Combine firstName and lastName for the 'name' field
      name: item.fields.name ? item.fields.name["en-US"] : "N/A",
      email: item.fields.email ? item.fields.email["en-US"] : "N/A",
      // The admin page table expects a 'message' field. Assuming 'details' from ContactForm maps to 'message' in Contentful.
      // If not, this needs to be adjusted based on the Contentful model.
      // The contact form saves a 'message' field to Contentful, so we use that.
      message: item.fields.message ? item.fields.message["en-US"] : "N/A",
      // The admin page also expects country and phone, adding them here if available.

      phone: item.fields.phone ? item.fields.phone["en-US"] : "N/A", // Retrieve phone field
      submittedAt: item.sys.createdAt, // Use Contentful's system createdAt field
    }));

    return NextResponse.json({ success: true, submissions });
  } catch (error) {
    console.error("Error fetching submissions from Contentful:", error);
    // Provide a more specific error message if possible, but avoid leaking sensitive details.
    let errorMessage = "Failed to fetch submissions.";
    if (error.name === "AccessTokenInvalid") {
      errorMessage =
        "Contentful access token is invalid. Please check server configuration.";
    }
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
