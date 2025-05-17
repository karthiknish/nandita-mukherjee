"use client";
import { motion } from "framer-motion";
import Head from "next/head";

// Dancing Script font from Google Fonts
const dancingScript = {
  fontFamily: "'Dancing Script', cursive",
};

// Animation variants
const itemVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 14, duration: 0.6 },
  },
};

const staggerParentVariant = (stagger = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

// Updated notes array: notes come from both left and right corners
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

function HeroSection() {
  return (
    <motion.section
      className="text-center relative pt-20 md:pt-28 pb-12 md:pb-16"
      variants={itemVariant}
    >
      {/* Main Hero Image */}
      <motion.div className="flex justify-center mb-8" variants={itemVariant}>
        <img
          src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/344869365_959519571750371_660521640693875541_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dR--F7Zl06MQ7kNvwH1r5ni&_nc_oc=Adl6gxMLhvMXWFOO9jQKnzqAJHSKketM1g_tMqyyZht0tb6GUS-vyEtMs9PzYwcP_25pIHXKAYloZ5w4X5ZnOekz&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=KnOrXUnx4gQ_kM6sqUkNYg&oh=00_AfIIXgfnBtDuBQwpj7iIW7h-DVzZJPzU6hl8ImYchla3Jg&oe=682E059B"
          alt="Nandita Mukherjee"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full shadow-2xl object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Harmonium SVG or musical illustration */}
      <motion.div className="mb-8 flex justify-center" variants={itemVariant}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <rect
            x="10"
            y="30"
            width="60"
            height="30"
            rx="6"
            fill="#fbbf24" // amber-400
            stroke="#a21caf" // fuchsia-700
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
          {[22, 32, 42, 52, 62].map((xPos) => (
            <rect
              key={xPos}
              x={xPos}
              y="42"
              width="6"
              height="6"
              rx="1"
              fill="#a21caf"
            />
          ))}
          <rect // Re-stroke for crisp border on top
            x="10"
            y="30"
            width="60"
            height="30"
            rx="6"
            fill="none" // No fill for the border overlay
            stroke="#a21caf"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6 text-fuchsia-700"
        style={dancingScript}
        variants={itemVariant}
      >
        Welcome to My Musical World
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-6 text-gray-700 max-w-2xl mx-auto px-4"
        variants={itemVariant}
      >
        Hello! My name is{" "}
        <span className="font-semibold text-primary">Nandita Mukherjee</span>. I
        am a professional Harmonium player, teacher, and composer. Born into a
        family of musicians, I have dedicated my life to sharing the joy and
        depth of Indian classical music through the harmonium.
      </motion.p>
      <motion.blockquote
        className="italic text-gray-600 border-l-4 border-yellow-500 pl-6 py-3 my-8 max-w-xl mx-auto text-md md:text-lg bg-white/30 rounded-r-md"
        variants={itemVariant}
      >
        &quot;Music gives life to everything. It is my sincerest wish to share
        this gift with you, so you may experience music in a more profound and
        joyful way than ever before.&quot;
      </motion.blockquote>
      <motion.p
        className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4"
        variants={itemVariant}
      >
        Welcome to my academy. I hope you enjoy what you find here, and please
        visit often—there will always be something new to discover.
      </motion.p>

      {/* Row of smaller images placeholder */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 md:mt-16"
        variants={staggerParentVariant(0.2)}
      >
        {[
          "https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.6435-9/82591349_2522351934646663_7159603486206722048_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=jhzNF_9YDC8Q7kNvwF6jEej&_nc_oc=Adl5ANFLf3Z_qwlUZBLfHzunzg_PfxefgDg0m-NZPzOsfHGpKj3qBIezhGr0miP7x7DemDEk_QYNW0ml87F2vi6q&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=M2le6yHokezcXzbyLRKLlg&oh=00_AfL9-ONSLsTbVummnA4XiyF3s2M0u4CRE49pNIiMjW3HZA&oe=684FD20B",
          "https://scontent.fmaa2-2.fna.fbcdn.net/v/t1.6435-9/96423392_1124275201269328_3135963555061301248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2g0NJqmvnBQQ7kNvwHQ7MD_&_nc_oc=Adnvvfiyh8BS7C8DNFStsfm-yyaGm_e4NUG5sOfKXvtmpKOF0aKBYRuLQYYr8eTbdiZ0OJZlKmgnNgU_ATuhdMdX&_nc_zt=23&_nc_ht=scontent.fmaa2-2.fna&_nc_gid=tQtpzdGzO3HNByJSNiO2VA&oh=00_AfIp61TBSt3c-mwA8fpuDeluWSItwqQs-cXzStcX6CQjNQ&oe=684FB4DB",
          "https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.6435-9/42308296_2197890030426190_2858430653953736704_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=xKjMb4TFG8kQ7kNvwHutano&_nc_oc=AdlFETxD5xffIsqa9coFWYQg-8k1F0dXPhRVOO-JxBK3eR4fCFTZzj5olCPNbA0xgyp6Gyyx85WeL0KtGRgwXo50&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=N3GqVmgTj85dH3j3k0p96w&oh=00_AfJht5p_j-qwKE0CwUDuZXmxFZFtA2vXcHalbOQDMDUm-w&oe=684FB951",
        ].map((img, index) => (
          <motion.div
            key={index}
            className="w-32 h-32 md:w-36 md:h-36 bg-white/70 rounded-xl shadow-lg flex items-center justify-center text-gray-400 text-sm hover:shadow-xl transition-shadow overflow-hidden"
            whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
            variants={itemVariant}
          >
            {/* Replace with actual <Image /> component from Next.js for optimization if images are local */}
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function SectionCard({ title, icon, children, titleStyle }) {
  return (
    <motion.section className="my-12 md:my-20" variants={itemVariant}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-8 md:p-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary flex items-center justify-center"
            style={titleStyle}
          >
            {icon && (
              <span className="mr-3 text-fuchsia-600 opacity-90">{icon}</span>
            )}
            {title}
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function PerformanceSection() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-9 h-9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
      />
    </svg>
  );
  return (
    <SectionCard title="Performance" icon={icon} titleStyle={dancingScript}>
      <p>
        I have performed with renowned artists across the globe, covering a wide
        range of musical styles from Indian classical to fusion. My journey has
        taken me to prestigious venues, radio, and television, and I am
        passionate about bringing the harmonium&apos;s unique voice to audiences
        everywhere.
      </p>
    </SectionCard>
  );
}

function TeachingSection() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-9 h-9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
  return (
    <SectionCard title="Teaching" icon={icon} titleStyle={dancingScript}>
      <p>
        As much as I love performing, teaching is my true calling. I believe the
        bond between teacher and student is sacred, and I have been privileged
        to guide many students of all ages over the years. My approach is
        personal, engaging both heart and mind, and always tailored to each
        student&apos;s pace and goals.
      </p>
      <p>
        Whether you are a beginner or looking to refine your skills, I offer
        lessons in harmonium, both online and in-person. My method is fun,
        challenging, and deeply rewarding. If you wish to pursue music exams, I
        can prepare you for accredited graded exams and diploma qualifications.
      </p>
    </SectionCard>
  );
}

function YouTubeSection() {
  // Provided latest video IDs
  const videos = ["-iOaLXntkVI", "x1TL3JbZnXw", "ab4SLvDvO44", "HiCWQQrr59g"];
  const channelUrl = "https://www.youtube.com/@nanditamukherjee"; // Replace with her real channel URL if available

  return (
    <section className="my-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary font-dancing">
        Watch Nandita on YouTube
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {videos.map((id) => (
          <div
            key={id}
            className="w-full md:w-80 aspect-video rounded-xl overflow-hidden shadow-lg bg-black"
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}`}
              title="Nandita Mukherjee YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-colors text-lg"
        >
          Visit YouTube Channel
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-9 h-9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
  return (
    <SectionCard title="Get in Touch" icon={icon} titleStyle={dancingScript}>
      <p>
        If you&apos;d like to know more about my work or the lessons I offer,
        please get in touch. I look forward to sharing the joy of music with
        you!
      </p>
      {/* Consider adding a contact form or direct links here */}
      <div className="mt-6 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-fuchsia-700 transition-colors duration-300"
        >
          Contact Me
        </motion.button>
      </div>
    </SectionCard>
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Nandita Mukherjee - Harmonium Player & Teacher</title>
        <meta
          name="description"
          content="Welcome to the official website of Nandita Mukherjee, professional harmonium player, teacher, and composer."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <motion.div
        className="relative min-h-screen w-full bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-200 overflow-x-hidden font-sans"
        initial="hidden"
        animate="visible"
        variants={staggerParentVariant(0.25)}
      >
        {/* Animated floating musical notes - Page wide */}
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
            className="absolute text-3xl md:text-5xl text-indigo-400/50 select-none pointer-events-none z-0"
            style={{
              left: note.side === "left" ? "5%" : "95%",
              transform: note.side === "right" ? "scaleX(-1)" : undefined,
            }}
          >
            {note.char}
          </motion.span>
        ))}

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
