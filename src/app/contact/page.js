"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Head from "next/head";

// Animation variants
const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const staggerParentVariant = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      router.push("/contact/thank-you");
    } catch (err) {
      setError(
        "Something went wrong. Please try again or check your connection."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>
          Contact Nandita Mukherjee | Harmonium & Rabindra Sangeet in London
        </title>
        <meta
          name="description"
          content="Contact Nandita Mukherjee for harmonium, Rabindra Sangeet, and Indian music lessons in London. Book a lesson or make an enquiry today."
        />
        <meta property="og:title" content="Contact Nandita Mukherjee" />
        <meta
          property="og:description"
          content="Contact Nandita Mukherjee for harmonium, Rabindra Sangeet, and Indian music lessons in London. Book a lesson or make an enquiry today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:image" content="/images/nandita-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Nandita Mukherjee" />
        <meta
          name="twitter:description"
          content="Contact Nandita Mukherjee for harmonium, Rabindra Sangeet, and Indian music lessons in London. Book a lesson or make an enquiry today."
        />
        <meta name="twitter:image" content="/images/nandita-og.jpg" />
      </Head>
      <motion.div
        className="min-h-screen flex flex-col items-center justify-start px-4 py-12 bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100"
        variants={staggerParentVariant(0.2)}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-6 flex flex-col items-center"
          variants={itemVariant}
        >
          {/* Musical SVG for flair */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="30"
              cy="30"
              rx="28"
              ry="18"
              fill="#fbbf24"
              stroke="#a21caf"
              strokeWidth="2"
            />
            <path
              d="M40 18 Q45 10 50 18 Q55 26 50 34 Q45 42 40 34 Q35 26 40 18 Z"
              fill="#a21caf"
              fillOpacity=".2"
            />
            <text
              x="50%"
              y="54%"
              textAnchor="middle"
              fill="#a21caf"
              fontSize="2.2rem"
              fontFamily="serif"
              dy=".3em"
            >
              🎶
            </text>
          </svg>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-primary">
            Contact Nandita Mukherjee
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl text-center">
            Have a question, want to book a lesson, or just want to say hello?
            Fill out the form below and I&apos;ll get back to you soon!
          </p>
          <div className="mt-6 text-center text-muted-foreground">
            <h2 className="text-xl font-semibold text-primary mb-2">
              You can also reach me directly:
            </h2>
            <p>
              Phone:
              <a
                href="tel:07769406432"
                className="text-indigo-600 hover:underline"
              >
                07769406432 {"     "}
              </a>
              <a
                href="tel:07380856052"
                className="text-indigo-600 hover:underline"
              >
                07380856052
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:nandita@nanditamukherjee.co.uk"
                className="text-indigo-600 hover:underline"
              >
                nandita@nanditamukherjee.co.uk
              </a>
            </p>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white/80 rounded-xl shadow-lg p-8 flex flex-col gap-4 border border-primary/10"
          variants={itemVariant}
        >
          <label className="text-left font-medium text-primary">Name</label>
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label className="text-left font-medium text-primary">Email</label>
          <Input
            name="email"
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label className="text-left font-medium text-primary">
            Phone (Optional)
          </label>
          <Input
            name="phone"
            type="tel"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <label className="text-left font-medium text-primary">Message</label>
          <Textarea
            name="message"
            placeholder="Type your message here..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="mt-4 w-full text-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
          {error && (
            <motion.div
              className="text-red-600 text-center mt-2 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {error}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </>
  );
}
