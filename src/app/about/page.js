"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Added for any potential links if not using Shadcn Button for everything

// Animation variant for items appearing
const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.5 },
  },
};

// Stagger container for direct children
const staggerParentVariant = (stagger = 0.15) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export default function AboutPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 flex flex-col justify-start py-12 md:py-20 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="w-full"
        variants={staggerParentVariant(0.2)}
        initial="hidden"
        animate="visible"
      >
        {/* Section 1: Title & Profile Image */}
        <motion.div
          variants={itemVariant}
          className="text-center pt-0 pb-12 md:pb-16" // Adjusted padding
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-dancing">
              About Nandita Mukherjee
            </h1>
            <div className="flex justify-center mt-8 md:mt-10">
              <img
                src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/274596627_3133623896852794_5400837364880614173_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=-0PUUk4cc58Q7kNvwHwm7zU&_nc_oc=Adlc3HVPRK1PlPqbphWr20A9imUZ17jZJLGdjgQmO_w_ZQ8rKJVHWVlYLt48hevq68jWi0sFURlGHukxILbRRwu0&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=KnOrXUnx4gQ_kM6sqUkNYg&oh=00_AfKMRMlxeA_Y-PCmTpS2eUGlDZ9wdGa5IgoHfP8RXEfxUA&oe=682E0962"
                alt="Nandita Mukherjee"
                className="rounded-full shadow-xl w-40 h-40 md:w-48 md:h-48 object-cover mx-auto border-4 border-white"
              />
            </div>
          </div>
        </motion.div>

        {/* Section 2: Introduction & Specialization */}
        <motion.section
          variants={itemVariant}
          className="bg-white/60 backdrop-blur-md py-10 md:py-12 shadow-lg" // Added shadow-lg for more pop
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary-foreground font-dancing border-b-2 border-primary/50 pb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 mr-3 text-primary opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
              Vocalist & Harmonium Player
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-semibold text-primary">
                Nandita Mukherjee
              </span>{" "}
              is a distinguished London-based vocalist and harmonium player,
              celebrated for her specialization in{" "}
              <span className="italic font-bold">Rabindra Sangeet</span> (Tagore
              songs). Renowned for the captivating sweetness of her voice,
              Nandita has been deeply immersed in the world of Tagore music
              since her childhood. This lifelong dedication has established her
              as a prominent and respected practitioner and performer within the
              UK's vibrant cultural landscape.
            </p>
          </div>
        </motion.section>

        {/* Section 3: Academic Engagement */}
        <motion.section
          variants={itemVariant}
          className="py-10 md:py-12 mt-12 md:mt-16" // Spacing from previous section
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary-foreground font-dancing border-b-2 border-primary/50 pb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 mr-3 text-primary opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
              Ethnomusicologist
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Beyond her captivating performances, Nandita is an accomplished
              ethnomusicologist affiliated with the prestigious{" "}
              <span className="font-semibold text-primary">
                SOAS University of London
              </span>
              . Her academic pursuits reflect a profound engagement with the
              rich and diverse musical traditions of South Asia, adding a
              scholarly depth to her artistic practice.
            </p>
          </div>
        </motion.section>

        {/* Section 4: Performance Highlights */}
        <motion.section
          variants={itemVariant}
          className="bg-white/60 backdrop-blur-md py-10 md:py-12 shadow-lg mt-12 md:mt-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary-foreground font-dancing border-b-2 border-primary/50 pb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 mr-3 text-primary opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.188l-1.25.813a4.5 4.5 0 01-3.09 3.09L11.25 19.5l.813-2.846a4.5 4.5 0 013.09-3.09L17 12l-1.813-2.846a4.5 4.5 0 01-3.09-3.09L11.25 4.5l.813 2.846a4.5 4.5 0 013.09 3.09L17 12z"
                />
              </svg>
              Notable Performances
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Nandita's musical contributions have graced various esteemed
              platforms. A notable highlight includes her performance at the{" "}
              <span className="italic text-secondary">
                &quot;Bengal to Bethnal Green&quot;
              </span>{" "}
              event, presented by the acclaimed Grand Union Orchestra at Rich
              Mix London, showcasing her versatility and collaborative spirit.
            </p>
          </div>
        </motion.section>

        {/* Section 5: Listen & Explore */}
        <motion.section
          variants={itemVariant}
          className="py-10 md:py-12 mt-12 md:mt-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary-foreground font-dancing border-b-2 border-primary/50 pb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 mr-3 text-primary opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
              Listen & Explore Her Music
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-3">
              Discover more of Nandita's enchanting music and performances
              through her online presence:
            </p>
            <ul className="list-none space-y-3 pl-0 md:pl-4">
              <li>
                <a
                  href="https://soundcloud.com/your-soundcloud-profile" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lg text-indigo-700 hover:text-indigo-900 hover:underline transition-colors duration-200 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 opacity-75 group-hover:opacity-100 transition-opacity"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                  Explore on SoundCloud
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/your-youtube-channel" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lg text-indigo-700 hover:text-indigo-900 hover:underline transition-colors duration-200 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 opacity-75 group-hover:opacity-100 transition-opacity"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  Watch on YouTube
                </a>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 6: Concluding Remarks */}
        <motion.section
          variants={itemVariant}
          className="bg-white/60 backdrop-blur-md py-10 md:py-12 shadow-lg mt-12 md:mt-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-md md:text-lg text-gray-600 leading-relaxed italic pt-6 border-t border-primary/30">
              For a deeper dive into her extensive repertoire, explore Nandita
              Mukherjee's recordings on SoundCloud and YouTube. There, she
              shares a rich variety of Tagore songs and other captivating
              musical pieces, offering a testament to her artistry and passion.
            </p>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
