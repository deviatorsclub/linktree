"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import links from "@/data/links";
import LOGO from "@/assets/sm.svg";
import AnimatedBackground from "@/components/AnimatedBackground";

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function LandingPage() {
  return (
    <>
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="pointer-events-none fixed top-0 right-0 left-0 z-40 h-24 bg-gradient-to-b from-black/80 to-transparent sm:hidden"></div>
      <a
        href="https://deviators.club"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.5 }}
          src={LOGO.src}
          alt="Deviators Logo"
          className="fixed top-6 left-1/2 z-50 h-5 -translate-x-1/2 cursor-pointer opacity-90 transition-opacity hover:opacity-100 sm:left-6 sm:h-6 sm:translate-x-0"
        />
      </a>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8 pt-24 text-white sm:py-12 sm:pt-16 md:py-16">
        {/* Main content container with responsive width */}
        <div className="w-full max-w-lg space-y-6 sm:max-w-2xl sm:space-y-8 md:max-w-3xl lg:max-w-4xl">
          {/* Brand section with logo and title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-3 sm:space-y-4"
          >
            {/* Main title and tagline */}
            <div className="space-y-1 text-center sm:space-y-2">
              <h1
                className="font-zalando-expanded text-4xl font-black whitespace-nowrap drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                }}
              >
                Deviators Club
              </h1>
              <p className="font-zalando text-base text-gray-300 drop-shadow-md sm:text-lg md:text-xl">
                Code. Create. Deviate.
              </p>
            </div>
          </motion.div>

          {/* Social media and contact links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                className={
                  index === links.length - 1 && links.length % 2 !== 0
                    ? "sm:col-span-2"
                    : ""
                }
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover group relative flex items-center justify-between rounded-2xl p-2.5 transition-all duration-300 sm:p-3"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    {/* Brand-colored icon container */}
                    <div
                      className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 sm:h-12 sm:w-12 sm:group-hover:scale-110"
                      style={{ backgroundColor: link.color }}
                    >
                      <link.icon
                        className="h-5 w-5 text-white sm:h-6 sm:w-6"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Link text content */}
                    <div className="font-zalando relative z-10 flex flex-col items-start justify-center transition-colors duration-300 sm:flex-row sm:items-center">
                      <span className="text-base font-semibold tracking-wide text-white/90 sm:text-lg sm:group-hover:text-white">
                        {link.name}
                      </span>
                      {link.name === "Gmail" && (
                        <span className="mt-0.5 text-xs font-normal text-white/70 sm:mt-0.5 sm:ml-2 sm:text-sm">
                          {link.subline}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Elegant Arrow Animation (Desktop only) */}
                  <div className="relative z-10 hidden -translate-x-4 pr-2 opacity-0 transition-all duration-300 sm:block sm:group-hover:-translate-x-1 sm:group-hover:opacity-100">
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="h-5 w-5 text-white/70"
                    />
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
