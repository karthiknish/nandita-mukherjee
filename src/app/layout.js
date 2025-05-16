import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar is .js
import Footer from "@/components/Footer"; // Footer is still .tsx
import Head from "next/head";

// Metadata can be exported directly in Next.js 13+ app router for JS files
export const metadata = {
  title: "Nandita Mukherjee",
  description: "Nandita Mukherjee",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* You might also have Dancing Script import here if used for headings */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-background font-sans antialiased flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
