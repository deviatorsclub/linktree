"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      {/* Animated Background — matching deviatorsclub.tech */}
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
        <div className="w-full max-w-lg space-y-6 sm:max-w-2xl sm:space-y-8 md:max-w-3xl lg:max-w-4xl">
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
                className="whitespace-nowrap font-heading text-4xl font-black drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                }}
              >
                Deviators Club
              </h1>
              <p className="font-outfit text-base text-gray-300 drop-shadow-md sm:text-lg md:text-xl">
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
                    <div className="relative z-10 flex flex-col items-start justify-center font-outfit transition-colors duration-300 sm:flex-row sm:items-center">
                      <span className="text-base font-semibold tracking-wide text-white/90 sm:text-lg sm:group-hover:text-white">
                        {link.name}
                      </span>
                      {link.name === "Gmail" && (
                        <span className="mt-0.5 text-xs font-normal text-white/70 sm:ml-2 sm:mt-0.5 sm:text-sm">
                          {link.subline}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Elegant Arrow Animation (Desktop only) */}
                  <div className="relative z-10 hidden -translate-x-4 pr-2 opacity-0 transition-all duration-300 sm:block sm:group-hover:-translate-x-1 sm:group-hover:opacity-100">
                    <ArrowRight className="h-5 w-5 text-white/70" />
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
