import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Nandita Mukherjee</title>
        <meta
          name="description"
          content="Sorry, the page you are looking for does not exist. Return to the homepage of Nandita Mukherjee, London-based harmonium player and vocalist."
        />
        <meta
          property="og:title"
          content="404 - Page Not Found | Nandita Mukherjee"
        />
        <meta
          property="og:description"
          content="Sorry, the page you are looking for does not exist. Return to the homepage of Nandita Mukherjee, London-based harmonium player and vocalist."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/404" />
        <meta property="og:image" content="/images/nandita-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="404 - Page Not Found | Nandita Mukherjee"
        />
        <meta
          name="twitter:description"
          content="Sorry, the page you are looking for does not exist. Return to the homepage of Nandita Mukherjee, London-based harmonium player and vocalist."
        />
        <meta name="twitter:image" content="/images/nandita-og.jpg" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 font-sans px-4 py-12">
        <div className="bg-white/80 rounded-xl shadow-lg p-10 flex flex-col items-center">
          <div className="text-6xl mb-4">🎶</div>
          <h1 className="text-4xl font-bold text-primary mb-2">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-center mb-6">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
            <br />
            Let the music guide you back home.
          </p>
          <Link
            href="/"
            className="px-6 py-2 bg-indigo-700 text-white rounded-lg font-semibold shadow hover:bg-indigo-900 transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
