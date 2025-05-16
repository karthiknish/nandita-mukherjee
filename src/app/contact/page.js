"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
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
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-12 bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100">
      <div className="mb-6 flex flex-col items-center">
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
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/80 rounded-xl shadow-lg p-8 flex flex-col gap-4 border border-primary/10"
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
          <div className="text-red-600 text-center mt-2 font-medium">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
