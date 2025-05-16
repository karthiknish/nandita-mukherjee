"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Animation variant for items appearing (e.g., card sections, paragraphs)
const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 14, duration: 0.5 },
  },
};

// Stagger container for direct children
const staggerParentVariant = (stagger = 0.1) => ({
  hidden: {}, // No initial state for the parent itself, only for children
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export default function AboutPage() {
  const cardContentAnimationStartDelay = 0.7;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 flex flex-col items-center justify-start px-4 py-12 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        className="w-full max-w-2xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <Card className="w-full bg-white/80 rounded-xl shadow-lg overflow-hidden">
          {/* This motion.div will stagger the appearance of CardHeader, CardContent, and CardFooter sections */}
          <motion.div
            variants={staggerParentVariant(0.15)} // Stagger sections by 0.15s
            initial="hidden"
            animate="visible"
            transition={{
              delayChildren: cardContentAnimationStartDelay,
              staggerChildren: 0.15,
            }}
          >
            {/* Card Header Section */}
            <motion.div variants={itemVariant}>
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-dancing">
                  About Nandita Mukherjee
                </CardTitle>
              </CardHeader>
            </motion.div>

            {/* Card Content Section */}
            <motion.div variants={itemVariant}>
              <CardContent className="pt-0">
                {" "}
                {/* Default shadcn: CardContent has p-6, pt-0 when following CardHeader */}
                {/* Inner stagger for paragraphs and the "Listen & Explore" div within CardContent */}
                <motion.div
                  variants={staggerParentVariant(0.1)} // Faster stagger for individual content items
                  initial="hidden" // Children inherit animate="visible"
                  animate="visible"
                  // This inner stagger starts when its parent (CardContent section wrapper) becomes visible
                >
                  <motion.p variants={itemVariant} className="mb-4 text-lg">
                    <span className="font-semibold">Nandita Mukherjee</span> is
                    a London-based vocalist and harmonium player specializing in{" "}
                    <span className="italic">Rabindra Sangeet</span> (Tagore
                    songs). Renowned for the sweetness of her voice, she has
                    been immersed in Tagore music since childhood, establishing
                    herself as a dedicated practitioner and performer in the UK.
                  </motion.p>
                  <motion.p variants={itemVariant} className="mb-4 text-lg">
                    Beyond her performances, Nandita is an ethnomusicologist
                    affiliated with{" "}
                    <span className="font-semibold">
                      SOAS University of London
                    </span>
                    , reflecting her academic engagement with South Asian music
                    traditions.
                  </motion.p>
                  <motion.p variants={itemVariant} className="mb-4 text-lg">
                    Her musical contributions include performances at events
                    such as{" "}
                    <span className="italic">
                      &quot;Bengal to Bethnal Green&quot;
                    </span>{" "}
                    presented by the Grand Union Orchestra at Rich Mix London.
                  </motion.p>

                  <motion.div variants={itemVariant} className="mb-4">
                    <h2 className="text-xl font-semibold mb-2 text-primary font-dancing">
                      Listen & Explore
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <a
                          href="https://soundcloud.com/your-soundcloud-profile" // Replace with actual link
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-700 underline hover:text-indigo-900 transition-colors duration-200"
                        >
                          SoundCloud Recordings
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://youtube.com/your-youtube-channel" // Replace with actual link
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-700 underline hover:text-indigo-900 transition-colors duration-200"
                        >
                          YouTube Channel
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </CardContent>
            </motion.div>

            {/* Card Footer Section */}
            <motion.div variants={itemVariant}>
              <CardFooter>
                {/* Original had mt-6, CardFooter provides its own padding (p-6, pt-0) */}
                <p className="text-base text-muted-foreground">
                  For more of her work, you can explore her recordings on
                  SoundCloud and YouTube, where she shares a variety of Tagore
                  songs and other musical pieces.
                </p>
              </CardFooter>
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
