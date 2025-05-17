"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Music2,
  Lightbulb,
  Sparkles,
  Quote,
  CalendarPlus,
  CheckCircle2,
} from "lucide-react";
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
  hidden: {}, // Parent container doesn't need to animate itself if children are animated
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export default function LessonsPage() {
  return (
    <>
      <Head>
        <title>
          Music Lessons with Nandita Mukherjee | Harmonium & Rabindra Sangeet in
          London
        </title>
        <meta
          name="description"
          content="Learn harmonium, Rabindra Sangeet, and Indian classical vocal with Nandita Mukherjee in London. Online and in-person music lessons for all ages and levels."
        />
        <meta
          property="og:title"
          content="Music Lessons with Nandita Mukherjee"
        />
        <meta
          property="og:description"
          content="Learn harmonium, Rabindra Sangeet, and Indian classical vocal with Nandita Mukherjee in London. Online and in-person music lessons for all ages and levels."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/lessons" />
        <meta property="og:image" content="/images/nandita-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Music Lessons with Nandita Mukherjee"
        />
        <meta
          name="twitter:description"
          content="Learn harmonium, Rabindra Sangeet, and Indian classical vocal with Nandita Mukherjee in London. Online and in-person music lessons for all ages and levels."
        />
        <meta name="twitter:image" content="/images/nandita-og.jpg" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 flex flex-col justify-start px-4 sm:px-6 lg:px-8 py-12 font-sans text-gray-800">
        {/* Main Page Content Wrapper */}
        <motion.div
          className="w-full max-w-7xl mx-auto space-y-16 md:space-y-20"
          variants={staggerParentVariant(0.2)}
          initial="hidden"
          animate="visible"
        >
          {/* Page Header */}
          <motion.header
            className="text-center pt-4 md:pt-8"
            variants={itemVariant}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary font-dancing flex items-center justify-center">
              <BookOpen className="w-10 h-10 md:w-12 md:h-12 mr-3 opacity-80" />
              Lessons with Nandita Mukherjee
            </h1>
            <blockquote className="italic text-lg md:text-xl text-gray-700 mb-10 md:mb-12 border-l-4 border-yellow-500 pl-6 py-3 max-w-3xl mx-auto bg-white/40 backdrop-blur-sm rounded-r-lg shadow-sm">
              “Music gives a soul to the universe, wings to the mind, flight to
              the imagination and life to everything.”
              <br />
              <span className="block mt-2 text-base text-gray-600">
                — Plato
              </span>
            </blockquote>
          </motion.header>

          {/* Section 1: Introduction */}
          <motion.section
            id="introduction"
            className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 md:p-10"
            variants={itemVariant}
          >
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="md:w-3/5 lg:w-1/2">
                <p className="mb-6 text-lg leading-relaxed">
                  If you&apos;re seeking music lessons for yourself or your
                  child, you&apos;ve come to the right place!
                  <br />
                  <br />
                  <span className="font-semibold text-primary">
                    Nandita Mukherjee
                  </span>{" "}
                  is a London-based music teacher and performer, specializing in{" "}
                  <span className="italic">Rabindra Sangeet</span> (Tagore
                  songs), Indian classical vocal, and harmonium. With years of
                  experience teaching students of all ages and backgrounds,
                  Nandita offers a nurturing, inspiring, and holistic approach
                  to music education—both online and in person.
                </p>
              </div>
              <div className="md:w-2/5 lg:w-1/2 flex justify-center items-center mt-6 md:mt-0">
                <motion.div
                  className="w-full max-w-md aspect-[4/3] rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <img
                    src="https://historified.in/wp-content/uploads/2023/02/36786589c6803ea61e8241b7f7a6eb69-564x560.jpg"
                    alt="Nandita Mukherjee teaching or performing"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: What Nandita Offers */}
          <motion.section
            id="what-is-offered"
            className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 md:p-10"
            variants={itemVariant}
          >
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="md:w-2/5 lg:w-1/2 order-1 md:order-2 flex justify-center items-center mt-6 md:mt-0">
                <motion.div
                  className="w-full max-w-md aspect-[4/3] rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/655e0fa544c67c1ee5ce01c7/655e0fa544c67c1ee5ce1177_different-types-of-microphones-which-one-do-you-need-og.jpeg"
                    alt="Musical instruments including microphones and potentially a harmonium setup"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="md:w-3/5 lg:w-1/2 order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center">
                  <Music2 className="w-7 h-7 mr-3 opacity-90" />
                  What Nandita Offers
                </h2>
                <motion.ul
                  className="text-lg text-gray-700 space-y-4 leading-relaxed"
                  variants={staggerParentVariant(0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {[
                    "Harmonium Lessons (beginner to advanced)",
                    "Rabindra Sangeet (Tagore Songs) Vocal Training",
                    "Indian Classical & Semi-Classical Vocal Lessons",
                    "Personalized online and in-person sessions",
                    "Preparation for graded music exams (if desired)",
                    "Supportive, student-centered teaching style",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={itemVariant}
                    >
                      <CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Nandita's Teaching Philosophy */}
          <motion.section
            id="philosophy"
            className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 md:p-10"
            variants={itemVariant}
          >
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="md:w-3/5 lg:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center">
                  <Lightbulb className="w-7 h-7 mr-3 opacity-90" />
                  Nandita&apos;s Teaching Philosophy
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Nandita believes that learning music should be a joyful,
                  life-enriching experience. Her teaching is rooted in tradition
                  but tailored to each student&apos;s pace, interests, and
                  goals. Whether you are a complete beginner or an advanced
                  student, Nandita&apos;s lessons are designed to engage both
                  heart and mind, fostering creativity, confidence, and a deep
                  love for music.
                </p>
              </div>
              <div className="md:w-2/5 lg:w-1/2 flex justify-center items-center mt-6 md:mt-0">
                <motion.div
                  className="w-full max-w-md aspect-[4/3] rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <img
                    src="https://images.assettype.com/english-sentinelassam/import/h-upload/2023/11/27/493925-ncpas-indian-music-line-up-for-december-2023.webp"
                    alt="Inspiring musical setting or students"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Why Learn with Nandita? */}
          <motion.section
            id="why-learn"
            className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 md:p-10"
            variants={itemVariant}
          >
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="md:w-2/5 lg:w-1/2 order-1 md:order-2 flex justify-center items-center mt-6 md:mt-0">
                <motion.div
                  className="w-full max-w-md aspect-[4/3] rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <img
                    src="https://londonmusicco.com/wp-content/uploads/2020/06/London-Music-Co-Blog-An-introduction-to-teaching-music-online-equipment-v2-1024x622.jpg"
                    alt="Online music lesson setup"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="md:w-3/5 lg:w-1/2 order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center">
                  <Sparkles className="w-7 h-7 mr-3 opacity-90" />
                  Why Learn with Nandita?
                </h2>
                <motion.ul
                  className="text-lg text-gray-700 space-y-4 leading-relaxed"
                  variants={staggerParentVariant(0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {[
                    "Experienced performer and teacher, affiliated with SOAS University of London",
                    "Specialist in Rabindra Sangeet and Indian harmonium",
                    "Flexible scheduling and lesson formats",
                    "Focus on both musical skill and personal growth",
                    "Warm, encouraging, and inclusive environment",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={itemVariant}
                    >
                      <CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Testimonials */}
          <motion.section
            id="testimonials"
            className="max-w-4xl mx-auto px-2"
            variants={itemVariant}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary text-center flex items-center justify-center">
              <Quote className="w-8 h-8 mr-3 opacity-90" />
              Testimonials
            </h2>
            <motion.div
              className="space-y-8"
              variants={staggerParentVariant(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.blockquote
                className="bg-pink-50/80 backdrop-blur-sm border-l-4 border-fuchsia-500 p-6 rounded-lg shadow-lg text-gray-700 italic text-left"
                variants={itemVariant}
              >
                &quot;Learning Rabindra Sangeet with Nandita has been a
                transformative experience. Her passion and patience make every
                lesson a joy!&quot;
                <br />
                <span className="block mt-3 text-base font-semibold text-primary not-italic">
                  — Student, London
                </span>
              </motion.blockquote>
              <motion.blockquote
                className="bg-pink-50/80 backdrop-blur-sm border-l-4 border-fuchsia-500 p-6 rounded-lg shadow-lg text-gray-700 italic text-left"
                variants={itemVariant}
              >
                &quot;Nandita&apos;s harmonium classes are both inspiring and
                fun. She brings out the best in her students.&quot;
                <br />
                <span className="block mt-3 text-base font-semibold text-primary not-italic">
                  — Parent of a young student
                </span>
              </motion.blockquote>
            </motion.div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="text-center pt-8 pb-8 md:pb-12"
            variants={itemVariant}
          >
            <motion.div
              className="inline-block" // To allow transform and proper layout for the Link
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-fuchsia-700 transition-colors text-lg md:text-xl transform focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50"
              >
                <CalendarPlus className="w-6 h-6 mr-3" />
                Book a Lesson with Nandita
              </Link>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
}
