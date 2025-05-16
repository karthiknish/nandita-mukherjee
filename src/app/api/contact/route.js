import { createClient } from "contentful-management";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Validate required fields (phone is optional unless specifically made required)
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Required fields are missing" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validate phone format if phone is provided
    if (phone && phone.trim() !== "") {
      const phoneRegex =
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(phone)) {
        return new Response(
          JSON.stringify({ error: "Invalid phone number format" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    // Prepare fields for Contentful, including phone if it exists
    const contentfulFields = {
      name: { "en-US": name },
      email: { "en-US": email },
      message: { "en-US": message },
    };

    if (phone && phone.trim() !== "") {
      // Only add phone to Contentful if it's provided and valid
      contentfulFields.phone = { "en-US": phone };
    }

    // Check for essential environment variables
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const managementToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN; // Already used for client
    const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID || "master";
    // The new code uses "contactForm" directly, but if you want to use an env var:
    const contentTypeId = "naditaContact"; // Fallback to "contactForm" if env var is not set

    if (!spaceId || !managementToken) {
      console.error(
        "Contentful configuration error: CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_TOKEN is not set."
      );
      return new Response(
        JSON.stringify({
          error: "Server configuration error. Please contact support.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    if (!contentTypeId) {
      console.error(
        "Contentful configuration error: CONTENTFUL_CONTACT_FORM_CONTENT_TYPE_ID is not set and no fallback was specified."
      );
      return new Response(
        JSON.stringify({
          error:
            "Server configuration error (contentTypeId). Please contact support.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Get space and environment
    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment(environmentId); // Using environmentId from env or "master"

    // Create entry
    // The new instruction uses "contactForm" directly.
    // If CONTENTFUL_CONTACT_FORM_CONTENT_TYPE_ID is preferred, ensure it's set and use contentTypeId.
    const entry = await environment.createEntry(contentTypeId, {
      fields: contentfulFields,
    });

    // The new instructions did not include publishing the entry.
    // If publishing is needed, uncomment the following line:
    // await entry.publish();

    console.log(
      `Contact form submission successful. Contentful Entry ID: ${entry.sys.id}`
    );

    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    let errorMessage = "Failed to submit form. Please try again.";
    // Check if it's a Contentful API error structure
    if (error.response && error.response.data) {
      console.error(
        "Contentful API Error Details:",
        JSON.stringify(error.response.data)
      );
      // You could potentially parse error.response.data for more specific user messages
      // For example, checking for specific error codes or messages from Contentful
      if (error.response.data.message) {
        errorMessage = `Failed to submit form: ${error.response.data.message}`;
      }
    } else if (error.name && error.message) {
      // Generic error
      console.error(
        "Error Details:",
        JSON.stringify({
          name: error.name,
          message: error.message,
          stack: error.stack, // Be cautious about logging full stack in production
        })
      );
    }

    // Determine status code based on error type if possible
    let statusCode = 500;
    if (error.response && error.response.status) {
      statusCode = error.response.status;
    }

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    });
  }
}
