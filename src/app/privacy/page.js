export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 flex flex-col items-center justify-start px-4 py-12 font-sans">
      <div className="max-w-2xl w-full bg-white/80 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Privacy Policy
        </h1>
        <p className="mb-4 text-lg">
          Your privacy is important to us. This page explains how we collect,
          use, and protect your information at Nandita Mukherjee's Harmonium
          Academy.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">
          What We Collect
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Your name and contact details (when you fill out our contact form)
          </li>
          <li>Any information you choose to share in your message</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            To respond to your inquiries and provide information about lessons
            or events
          </li>
          <li>To improve our website and services</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">
          How We Protect Your Data
        </h2>
        <p className="mb-4">
          We never share your information with third parties except as required
          by law. Your data is stored securely and only accessible to authorized
          personnel.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">
          Contact
        </h2>
        <p>
          If you have any questions about your privacy, please{" "}
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
  );
}
