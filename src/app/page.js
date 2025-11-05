"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  Music,
  Youtube,
  BookOpen,
  Users,
  Mail,
  ChevronRight,
} from "lucide-react";

// Dancing Script font from Google Fonts
const dancingScript = {
  fontFamily: "'Dancing Script', cursive",
};

// Unique font for headings
const headingFont = {
  fontFamily: "'Dancing Script', cursive",
  letterSpacing: "0.04em",
};

// Animation variants
const itemVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 16, duration: 0.7 },
  },
};

const staggerParentVariant = (stagger = 0.12) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

// Animated notes
const notes = [
  { id: 1, delay: 0, char: "🎵", drift: 30, side: "left" },
  { id: 2, delay: 1.5, char: "🎶", drift: 60, side: "left" },
  { id: 3, delay: 0.5, char: "🎼", drift: 45, side: "left" },
  { id: 4, delay: 2.5, char: "🎹", drift: 80, side: "left" },
  { id: 5, delay: 1, char: "🎤", drift: 20, side: "left" },
  { id: 6, delay: 2, char: "🎵", drift: -30, side: "right" },
  { id: 7, delay: 0.7, char: "🎶", drift: -60, side: "right" },
  { id: 8, delay: 1.8, char: "🎼", drift: -45, side: "right" },
  { id: 9, delay: 2.2, char: "🎹", drift: -80, side: "right" },
  { id: 10, delay: 1.2, char: "🎤", drift: -20, side: "right" },
];

// Section Wrapper (full width)
function Section({ children, bg, className = "", style }) {
  return (
    <section
      className={`relative py-20 md:py-32 w-full ${bg} ${className} overflow-visible`}
      style={{
        minWidth: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        ...(style || {}),
      }}
    >
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

function HeroSection() {
  return (
    <Section
      // bg="bg-gradient-to-br from-rose-50 via-purple-100 to-sky-100"
      className="pt-24 pb-16 md:pt-32 md:pb-24" // Adjusted padding for hero
      style={{
        backgroundColor: "#e5e5f7",
        backgroundImage:
          "repeating-radial-gradient(circle at 0 0, transparent 0, rgb(229, 229, 247,0.7) 10px), repeating-linear-gradient(rgba(68,76,247,0.1), rgb(68,76,247,0.1))",
      }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 max-w-7xl mx-auto px-4"
        variants={itemVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center gap-4"
          variants={itemVariant}
        >
          <div className="relative group">
            <img
              src="/nandita-hero.jpg"
              alt="Nandita Mukherjee"
              className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl group-hover:shadow-2xl border-4 border-white/60 ring-2 ring-purple-300 group-hover:ring-purple-500 transition-all duration-300 transform group-hover:scale-105"
            />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg group-hover:from-purple-700 group-hover:to-indigo-700 transform group-hover:scale-105 transition-all duration-300 tracking-wider">
              Musical Artist
            </span>
          </div>
          <motion.div
            className="mt-5 flex justify-center"
            variants={itemVariant}
          >
            <Music className="w-14 h-14 text-purple-600 drop-shadow-md animate-spin-slow" />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 md:gap-8"
          variants={staggerParentVariant(0.15)}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-purple-700 drop-shadow-lg leading-tight"
            style={{
              ...headingFont,
              letterSpacing: "0.01em",
              lineHeight: 1.15,
            }}
            variants={itemVariant}
          >
            <span
              className="block text-purple-600 mb-2 text-2xl md:text-3xl font-semibold tracking-wide"
              style={dancingScript}
            >
              Namaste, I&apos;m
            </span>
            Nandita Mukherjee
            <span className="block text-xl md:text-2xl font-medium text-purple-500 mt-3 tracking-wide">
              Musical Artist &amp; Educator
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0"
            variants={itemVariant}
          >
            With roots in a family of musicians, I&apos;ve dedicated my life to
            sharing the beauty and depth of Indian classical music through the
            harmonium. As a performer, teacher, I invite you to explore, learn,
            and experience the transformative power of music.
          </motion.p>

          <motion.blockquote
            className="relative italic text-slate-700 border-l-4 border-purple-400 pl-6 py-3 my-4 max-w-xl mx-auto md:mx-0 text-md md:text-lg"
            variants={itemVariant}
          >
            <span className="absolute left-0 -top-2 text-5xl text-purple-400/80 select-none font-serif">
              “
            </span>
            Music gives life to everything. It is my sincerest wish to share
            this gift with you, so you may experience music in a more profound
            and joyful way than ever before.
            <span className="absolute -right-3 -bottom-4 text-5xl text-purple-400/80 select-none font-serif">
              ”
            </span>
          </motion.blockquote>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full mt-4 sm:justify-start justify-center"
            variants={itemVariant}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Get in Touch
            </a>
            <a
              href="/lessons"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-purple-50 border border-purple-200 hover:border-purple-300 transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Explore Lessons
            </a>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-x-6 md:gap-y-6 mt-8 md:mt-12"
            variants={staggerParentVariant(0.2)}
          >
            {[
              "/gallery1.jpeg",
              "/gallery2.jpeg",
              "/gallery3.jpeg",
            ].map((img, index) => (
              <motion.div
                key={index}
                className="w-32 h-32 md:w-36 md:h-36 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  rotate: Math.random() > 0.5 ? 2 : -2,
                }}
                variants={itemVariant}
              >
                {/* Replace with actual <Image /> component from Next.js for optimization if images are local */}
                <img
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

// Renamed from SectionCard and redesigned
function ContentSection({
  title,
  icon,
  children,
  titleStyle,
  titleColor = "text-purple-700",
  textColor = "text-gray-800",
  bg,
}) {
  return (
    <Section bg={bg}>
      <motion.div
        className="w-full max-w-5xl mx-auto px-4 md:px-8 text-center"
        variants={itemVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-10 flex items-center justify-center gap-4 ${titleColor} drop-shadow-md`}
          style={titleStyle}
        >
          {icon}
          {title}
        </h2>
        <div
          className={`text-lg md:text-xl ${textColor} leading-relaxed space-y-6 max-w-3xl mx-auto text-left`}
        >
          {children}
        </div>
      </motion.div>
    </Section>
  );
}

function PerformanceSection() {
  return (
    <ContentSection
      title="Performance"
      icon={<Users className="w-12 h-12 text-indigo-600" />}
      titleStyle={headingFont}
      titleColor="text-indigo-700"
      textColor="text-slate-700"
      bg="bg-gradient-to-br from-indigo-100 via-pink-50 to-yellow-50"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Performance text on the left */}
        <div className="flex-1 space-y-6">
          <p>
            I have performed with renowned artists across the globe, covering a
            wide range of musical styles from Indian classical to fusion. My
            journey has taken me to prestigious venues, radio, and television,
            and I am passionate about bringing the harmonium&apos;s unique voice
            to audiences everywhere.
          </p>
        </div>
        {/* Image on the right (bottom on mobile) */}
        <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://images.pexels.com/photos/4090218/pexels-photo-4090218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Performance setting"
            className="rounded-2xl shadow-xl object-cover w-full max-w-xs md:max-w-full aspect-[9/16] h-auto md:h-[420px]"
          />
        </div>
      </div>
    </ContentSection>
  );
}

function TeachingSection() {
  return (
    <ContentSection
      title="Teaching"
      icon={<BookOpen className="w-12 h-12 text-pink-600" />}
      titleStyle={headingFont}
      titleColor="text-pink-700"
      textColor="text-slate-700"
      bg="bg-gradient-to-br from-pink-100 via-yellow-50 to-indigo-50"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image on the left (top on mobile) */}
        <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src="https://images.pexels.com/photos/3971983/pexels-photo-3971983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Harmonium and teaching setting"
            className="rounded-2xl shadow-xl object-cover w-full max-w-xs md:max-w-full aspect-[9/16] h-auto md:h-[420px]"
          />
        </div>
        {/* Teaching text on the right */}
        <div className="flex-1 space-y-6">
          <p>
            As much as I love performing, teaching is my true calling. I believe
            the bond between teacher and student is sacred, and I have been
            privileged to guide many students of all ages over the years. My
            approach is personal, engaging both heart and mind, and always
            tailored to each student&apos;s pace and goals.
          </p>
          <p>
            Whether you are a beginner or looking to refine your skills, I offer lessons in Bengali music and in harmonium, both online and in person. My method is fun,
            challenging, and deeply rewarding. If you wish to pursue music
            exams, I can prepare you for accredited graded exams and diploma
            qualifications.
          </p>
        </div>
      </div>
    </ContentSection>
  );
}

function YouTubeSection() {
  const videos = ["-iOaLXntkVI","_212Qu4eNN8", "x1TL3JbZnXw", "ab4SLvDvO44", "HiCWQQrr59g", "UqFkgK9hxzQ","Z41YyTxAKgE","pieSUAd-fc4","7JX8eeFdeGU",];
  const channelUrl = "https://www.youtube.com/@nanditamukherjee515";

  return (
    <Section bg="bg-gradient-to-br from-indigo-50 via-pink-100 to-yellow-100">
      <motion.div
        className="w-full max-w-6xl mx-auto px-2 md:px-8"
        variants={itemVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-red-600 flex items-center justify-center gap-3 drop-shadow-md"
          style={headingFont}
        >
          <Youtube className="w-12 h-12 text-red-600" />
          Watch Nandita on YouTube
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((id) => (
            <div
              key={id}
              className="w-full md:w-96 aspect-video overflow-hidden" // Removed shadow, bg, border
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}`}
                title="Nandita Mukherjee YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl" // Added rounding to iframe
              ></iframe>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-colors text-xl"
          >
            Visit YouTube Channel <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section bg="bg-gradient-to-br from-yellow-50 via-pink-100 to-indigo-100">
      <motion.div
        className="w-full max-w-4xl mx-auto px-4 md:px-8 text-center"
        variants={itemVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-10 text-fuchsia-700 flex items-center justify-center gap-4 drop-shadow-md"
          style={headingFont}
        >
          <Mail className="w-12 h-12 text-fuchsia-600" />
          Get in Touch
        </h2>
        <div className="text-lg md:text-xl text-slate-700 leading-relaxed space-y-6 max-w-2xl mx-auto">
          <p>
            If you&apos;d like to know more about my work or the lessons I
            offer, please get in touch. I look forward to sharing the joy of
            music with you!
          </p>
          <div className="mt-10">
            <motion.button
              onClick={() => {
                window.location.href="/contact";
              }}
              whileHover={{ scale: 1.08, backgroundColor: "#c026d3" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-fuchsia-600 text-white font-bold rounded-xl shadow-lg hover:bg-fuchsia-700 transition-colors duration-300 text-lg text-shadow"
            >
              <Mail className="w-6 h-6" />
              Contact Me
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

// Fix: Only render animated notes on client side to avoid hydration mismatch
function AnimatedNotes() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      {notes.map((note) => (
        <motion.span
          key={note.id}
          initial={{ y: "110vh", opacity: 0, x: 0 }}
          animate={{
            y: "-20vh",
            x: note.drift,
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 7,
            delay: note.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="fixed text-4xl md:text-6xl text-indigo-400/60 select-none pointer-events-none z-50"
          style={{
            left: note.side === "left" ? "5%" : "95%",
            transform: note.side === "right" ? "scaleX(-1)" : undefined,
            top: 0,
            filter: "drop-shadow(0 2px 8px #818cf8aa)",
          }}
        >
          {note.char}
        </motion.span>
      ))}
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          Nandita Mukherjee | Harmonium, Rabindra Sangeet & Indian Music in
          London
        </title>
        <meta
          name="description"
          content="Welcome to the official website of Nandita Mukherjee, London-based harmonium player, vocalist, and teacher specializing in Rabindra Sangeet and Indian classical music."
        />
        <meta
          property="og:title"
          content="Nandita Mukherjee | Harmonium, Rabindra Sangeet & Indian Music in London"
        />
        <meta
          property="og:description"
          content="Welcome to the official website of Nandita Mukherjee, London-based harmonium player, vocalist, and teacher specializing in Rabindra Sangeet and Indian classical music."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nanditamukherjee.co.uk/" />
        <meta property="og:image" content="/images/nandita-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nandita Mukherjee | Harmonium, Rabindra Sangeet & Indian Music in London"
        />
        <meta
          name="twitter:description"
          content="Welcome to the official website of Nandita Mukherjee, London-based harmonium player, vocalist, and teacher specializing in Rabindra Sangeet and Indian classical music."
        />
        <meta name="twitter:image" content="/images/nandita-og.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .text-shadow {
            text-shadow: 0 2px 8px #f472b6aa;
          }
        `}</style>
      </Head>
      <motion.div
        className="relative min-h-screen w-full overflow-x-hidden font-sans"
        initial="hidden"
        animate="visible"
        variants={staggerParentVariant(0.25)}
        style={{
          background:
            "linear-gradient(120deg, #fdf6e3 0%, #fce7f3 50%, #e0e7ff 100%)",
        }}
      >
        {/* Animated floating musical notes - Page wide */}
        <AnimatedNotes />

        <main className="relative z-10 w-full">
          <HeroSection />
          <PerformanceSection />
          <TeachingSection />
          <YouTubeSection />
          <ContactSection />
        </main>
      </motion.div>
    </>
  );
}
