"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import links from "@/data/links";
import LOGO from "@/assets/sm.svg";
import AnimatedBackground from "@/components/AnimatedBackground";

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

export default function LandingPage() {
  return (
    <>
      {/* 3D Background */}
      <AnimatedBackground />

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-8 text-white sm:py-12 md:py-16">
        {/* Fixed logo for desktop - positioned top-left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed left-6 top-6 z-50 hidden md:block"
        >
          <div className="relative h-16 w-20">
            <Image
              src={LOGO}
              alt="Deviators Club Logo"
              fill
              sizes="80px"
              className="rounded-none border-none object-contain p-1"
              priority
            />
          </div>
        </motion.div>

        {/* Main content container with responsive width */}
        <div className="w-full max-w-sm space-y-6 sm:max-w-md sm:space-y-8 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {/* Brand section with logo and title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-3 sm:space-y-4"
          >
            {/* Mobile logo - centered above title */}
            <div className="relative mb-4 h-16 w-24 md:hidden">
              <Image
                src={LOGO}
                alt="Deviators Club Logo"
                fill
                sizes="96px"
                className="rounded-none border-none object-contain p-2"
                priority
              />
            </div>

            {/* Main title and tagline */}
            <div className="space-y-1 text-center sm:space-y-2 md:-mt-20">
              <h1
                className="whitespace-nowrap font-pixelify text-4xl font-bold drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                }}
              >
                Deviators Club
              </h1>
              <p className="text-base text-gray-300 drop-shadow-md sm:text-lg md:text-xl">
                Code. Create. Deviate.
              </p>
            </div>
          </motion.div>

          {/* Social media and contact links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-3 sm:space-y-4"
          >
            {links.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-white/8 hover:shadow-3xl relative flex transform items-center justify-start space-x-3 rounded-full border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/15 sm:space-x-4 sm:p-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  }}
                >
                  {/* Brand-colored icon container */}
                  <div
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12 md:h-14 md:w-14"
                    style={{ backgroundColor: link.color }}
                  >
                    <link.icon
                      className="h-5 w-5 text-white sm:h-6 sm:w-6 md:h-7 md:w-7"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Link text content */}
                  <div className="relative z-10">
                    <div className="text-base font-bold text-white sm:text-lg md:text-xl">
                      {link.name}
                    </div>
                    <div className="text-xs text-white opacity-90 sm:text-sm md:text-base">
                      {link.subline}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
