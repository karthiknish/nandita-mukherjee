# Nandita Mukherjee - Harmonium Academy Website

This project is a website for Nandita Mukherjee, a harmonium artist and teacher, focusing on her "Harmonium Academy." The site aims to provide information about her performances, teaching, and a way to get in contact. It is inspired by sites like `vijayjagtap.com` but tailored to Nandita Mukherjee's profile.

## Features

*   **Homepage:** Introduces Nandita Mukherjee, her harmonium expertise, and highlights of her work. Includes animated musical notes and a harmonium illustration.
*   **About Page:** Detailed biography, specialization in Rabindra Sangeet, affiliations, and performance highlights.
*   **Contact Page:** A form for inquiries and lesson bookings, with submissions managed via Contentful.
*   **Admin Section (`/admin`):** A password-protected area (username: `admin`, password: `Admin1!`) to view contact form submissions fetched from Contentful. (Note: Client-side auth is for basic protection only).
*   **Privacy Policy & Terms:** Basic placeholder pages.
*   **Custom 404 Page:** A themed "not found" page.
*   **Responsive Design:** Adapts to various screen sizes, including a mobile-friendly navigation menu.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Content Management (for Contact Form):** [Contentful](https://www.contentful.com/)
*   **Language:** JavaScript (with JSX)
*   **Font:** Quicksand (globally applied)

## Project Structure (Key Directories)

```
src/
├── app/                            # Next.js App Router: Pages and API routes
│   ├── (main pages)/               # e.g., about/, contact/, privacy/, terms/
│   │   └── page.js
│   ├── admin/                      # Admin section for viewing submissions
│   │   └── page.js
│   ├── api/
│   │   ├── contact/route.js        # API endpoint for contact form submission to Contentful
│   │   └── submissions/route.js    # API endpoint for fetching submissions for admin panel
│   ├── layout.js                   # Main layout component
│   ├── page.js                     # Homepage component
│   ├── globals.css                 # Global styles, Tailwind imports, font imports
│   └── not-found.js                # Custom 404 page
├── components/
│   ├── ui/                         # Shadcn/UI components (e.g., Button, Card, Input)
│   ├── Footer.js                   # Site-wide footer component
│   └── Navbar.js                   # Site-wide navigation bar component
└── public/                         # Static assets (images, favicon)
```

## Getting Started

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm, yarn, or pnpm

### Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables. These are crucial for the contact form submission and the admin panel to function correctly.

```env
# Contentful Space ID (used for both contact form submission and admin panel)
CONTENTFUL_SPACE_ID='YOUR_SPACE_ID'

# Contentful Management API Access Token (for writing data - contact form submission)
# Ensure this token has permissions to create entries for your contact form content type.
CONTENTFUL_MANAGEMENT_ACCESS_TOKEN='YOUR_MANAGEMENT_API_TOKEN'
# CONTENTFUL_MANAGEMENT_TOKEN='YOUR_MANAGEMENT_API_TOKEN' # Or this if you used it in your code

# Contentful Content Delivery API Access Token (for reading data - admin panel submissions)
# This token is different from the Management API token.
CONTENTFUL_DELIVERY_ACCESS_TOKEN='YOUR_DELIVERY_API_TOKEN'
# CONTENTFUL_DELIVERY_API_KEY='YOUR_DELIVERY_API_TOKEN' # Or this if you used it in your code

# Contentful Environment ID (usually 'master' if not specified otherwise)
CONTENTFUL_ENVIRONMENT_ID='master'

# Contentful Contact Form Content Type ID
# This is the ID of the content model you created in Contentful for storing contact form submissions (e.g., 'contactForm', 'submission').
CONTENTFUL_CONTACT_FORM_CONTENT_TYPE_ID='YOUR_CONTACT_FORM_CONTENT_TYPE_ID'
```

**Note on Contentful Tokens:**
*   The `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN` (or `CONTENTFUL_MANAGEMENT_TOKEN`) is used by `src/app/api/contact/route.js` to *create* new entries in Contentful when the contact form is submitted.
*   The `CONTENTFUL_DELIVERY_ACCESS_TOKEN` (or `CONTENTFUL_DELIVERY_API_KEY`) is used by `src/app/api/submissions/route.js` to *read* entries from Contentful for the admin panel.

Make sure to replace `'YOUR_...'` with your actual Contentful credentials.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```
3.  Initialize Shadcn/UI (if not already set up or if you need to add more components):
    ```bash
    npx shadcn-ui@latest init
    ```
    You may be asked to configure `components.json`. The project generally uses the default settings (TypeScript: no, app Router, etc., matching the current setup).

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Configuration Files

*   `tailwind.config.mjs`: Tailwind CSS configuration, including the Quicksand font family.
*   `next.config.mjs`: Next.js configuration.
*   `components.json`: Shadcn/UI configuration.

## Deployment

This project can be deployed to any platform that supports Next.js, such as Vercel (from the creators of Next.js) or Netlify.
Ensure your environment variables are set up on your deployment platform.

---

_This README was generated based on the project's development history and aims to provide a comprehensive overview. Please update it as the project evolves._
