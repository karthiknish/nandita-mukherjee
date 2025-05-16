"use client";
import { motion } from "framer-motion";
import Head from "next/head";

// Dancing Script font from Google Fonts
const dancingScript = {
  fontFamily: "'Dancing Script', cursive",
};

const notes = [
  { id: 1, x: "10%", delay: 0 },
  { id: 2, x: "30%", delay: 1 },
  { id: 3, x: "60%", delay: 2 },
  { id: 4, x: "80%", delay: 1.5 },
];

function HeroSection() {
  return (
    <section className="mb-12 text-center relative font-sans">
      {/* Animated floating musical notes */}
      {notes.map((note) => (
        <motion.span
          key={note.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: ["100vh", "-10vh"], opacity: [0, 1, 0] }}
          transition={{
            duration: 8,
            delay: note.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute text-3xl md:text-4xl text-indigo-300 select-none pointer-events-none"
          style={{ left: note.x }}
        >
          🎵
        </motion.span>
      ))}

      {/* Main Hero Image Placeholder */}
      <div className="flex justify-center mb-6 relative z-10 font-sans">
        {/* Replace the div below with your image. Example: <img src="/your-image.jpg" alt="Nandita Mukherjee" className="rounded-lg shadow-lg w-48 h-48 object-cover" /> */}
        <div className="w-48 h-48 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-400 text-lg">
          Main Image Here
        </div>
      </div>

      {/* Harmonium SVG or musical illustration */}
      <div className="mb-6 relative z-10">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="30"
            width="60"
            height="30"
            rx="6"
            fill="#fbbf24"
            stroke="#a21caf"
            strokeWidth="2"
          />
          <rect
            x="18"
            y="38"
            width="44"
            height="14"
            rx="2"
            fill="#fff"
            stroke="#a21caf"
            strokeWidth="1.5"
          />
          <rect x="22" y="42" width="6" height="6" rx="1" fill="#a21caf" />
          <rect x="32" y="42" width="6" height="6" rx="1" fill="#a21caf" />
          <rect x="42" y="42" width="6" height="6" rx="1" fill="#a21caf" />
          <rect x="52" y="42" width="6" height="6" rx="1" fill="#a21caf" />
          <rect x="62" y="42" width="6" height="6" rx="1" fill="#a21caf" />
          <rect
            x="10"
            y="30"
            width="60"
            height="30"
            rx="6"
            stroke="#a21caf"
            strokeWidth="2"
          />
        </svg>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={dancingScript}>
        Welcome
      </h1>
      <p className="text-lg md:text-xl mb-6 font-sans">
        Hello! My name is{" "}
        <span className="font-semibold text-primary">Nandita Mukherjee</span>. I
        am a professional Harmonium player, teacher, and composer, based in
        [Your City]. Born into a family of musicians, I have dedicated my life
        to sharing the joy and depth of Indian classical music through the
        harmonium.
      </p>
      <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4 mb-4 font-sans">
        "Music gives life to everything. It is my sincerest wish to share this
        gift with you, so you may experience music in a more profound and joyful
        way than ever before."
      </blockquote>
      <p className="text-base md:text-lg font-sans">
        Welcome to my academy. I hope you enjoy what you find here, and please
        visit often—there will always be something new to discover.
      </p>

      {/* Row of smaller images placeholder */}
      <div className="flex justify-center gap-4 mt-8 font-sans">
        {/* Example usage:
        <img src="/gallery1.jpg" alt="Performance 1" className="w-24 h-24 rounded-md object-cover shadow" />
        <img src="/gallery2.jpg" alt="Performance 2" className="w-24 h-24 rounded-md object-cover shadow" />
        <img src="/gallery3.jpg" alt="Performance 3" className="w-24 h-24 rounded-md object-cover shadow" />
        */}
        <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center text-gray-300 text-sm">
          Image 1
        </div>
        <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center text-gray-300 text-sm">
          Image 2
        </div>
        <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center text-gray-300 text-sm">
          Image 3
        </div>
      </div>
    </section>
  );
}

function PerformanceSection() {
  return (
    <section className="mb-12 font-sans">
      <h2 className="text-2xl font-semibold mb-2 text-primary">Performance</h2>
      <p>
        I have performed with renowned artists across the globe, covering a wide
        range of musical styles from Indian classical to fusion. My journey has
        taken me to prestigious venues, radio, and television, and I am
        passionate about bringing the harmonium&apos;s unique voice to audiences
        everywhere.
      </p>
    </section>
  );
}

function TeachingSection() {
  return (
    <section className="mb-12 font-sans">
      <h2 className="text-2xl font-semibold mb-2 text-primary">Teaching</h2>
      <p>
        As much as I love performing, teaching is my true calling. I believe the
        bond between teacher and student is sacred, and I have been privileged
        to guide many students of all ages over the years. My approach is
        personal, engaging both heart and mind, and always tailored to each
        student&apos;s pace and goals.
      </p>
      <p className="mt-2">
        Whether you are a beginner or looking to refine your skills, I offer
        lessons in harmonium, both online and in-person. My method is fun,
        challenging, and deeply rewarding. If you wish to pursue music exams, I
        can prepare you for accredited graded exams and diploma qualifications.
      </p>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="mb-12 font-sans">
      <h2 className="text-2xl font-semibold mb-2 text-primary">Get in Touch</h2>
      <p>
        If you&apos;d like to know more about my work or the lessons I offer,
        please get in touch. I look forward to sharing the joy of music with
        you!
      </p>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative min-h-screen w-full bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 overflow-hidden font-sans">
        <main className="flex flex-col items-center justify-start px-4 py-12 max-w-3xl mx-auto relative z-10 font-sans">
          <HeroSection />
          <PerformanceSection />
          <TeachingSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
