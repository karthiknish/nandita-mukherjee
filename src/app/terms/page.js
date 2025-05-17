import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Nandita Mukherjee</title>
        <meta
          name="description"
          content="Terms and conditions for using the website and booking lessons with Nandita Mukherjee, London-based harmonium player and Rabindra Sangeet specialist."
        />
        <meta
          property="og:title"
          content="Terms & Conditions | Nandita Mukherjee"
        />
        <meta
          property="og:description"
          content="Terms and conditions for using the website and booking lessons with Nandita Mukherjee, London-based harmonium player and Rabindra Sangeet specialist."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/terms" />
        <meta property="og:image" content="/images/nandita-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Terms & Conditions | Nandita Mukherjee"
        />
        <meta
          name="twitter:description"
          content="Terms and conditions for using the website and booking lessons with Nandita Mukherjee, London-based harmonium player and Rabindra Sangeet specialist."
        />
        <meta name="twitter:image" content="/images/nandita-og.jpg" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 flex flex-col items-center justify-start px-4 py-12 font-sans">
        <div className="max-w-2xl w-full bg-white/80 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Terms &amp; Conditions
          </h1>
          <p className="mb-4 text-lg">
            Welcome to Nandita Mukherjee&apos;s Harmonium Academy. By using this
            website or booking lessons, you agree to the following terms and
            conditions.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">
            Lessons & Bookings
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Lesson times are agreed in advance and must be cancelled at least
              24 hours before the scheduled time.
            </li>
            <li>
              Fees for lessons are payable in advance unless otherwise agreed.
            </li>
            <li>
              All lessons are conducted in a respectful and supportive
              environment.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">
            Content & Copyright
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              All content on this website, including recordings and materials,
              is the property of Nandita Mukherjee unless otherwise stated.
            </li>
            <li>Do not reproduce or distribute content without permission.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">
            Contact
          </h2>
          <p>
            If you have any questions about these terms, please{" "}
            <a
              href="/contact"
              className="text-indigo-700 underline hover:text-indigo-900"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
