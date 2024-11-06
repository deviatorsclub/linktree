"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import links, { mailId } from "@/data/links";

import LOGO from "@/assets/logo.png";

export default function LandingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-900 px-4 py-8 text-white sm:py-12 md:py-16">
      <div className="w-full max-w-xs space-y-6 sm:max-w-sm sm:space-y-8 md:max-w-md lg:max-w-lg">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-3 sm:space-y-4"
        >
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
            <Image
              src={LOGO}
              alt="DEViators Club"
              fill
              className="rounded-none border-none bg-gray-900 object-contain p-2"
              priority
            />
          </div>
          <div className="space-y-1 text-center sm:space-y-2">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              @deviatorsclub
            </h1>
            <p className="text-base text-gray-300 sm:text-lg md:text-xl">
              Empowering Developers to Innovate!
            </p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-3 sm:space-y-4"
        >
          {links.map((link) => (
            <motion.div key={link.name} variants={item}>
              <Link
                href={link.href}
                target="_blank"
                className={`flex transform items-center space-x-3 rounded-xl bg-gradient-to-r ${link.color} p-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:space-x-4 sm:p-4`}
              >
                <link.icon className="h-6 w-6 text-white sm:h-7 sm:w-7 md:h-8 md:w-8" />
                <div>
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

        <motion.a
          href={`mailto:${mailId}`}
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-white p-3 text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-4"
          >
            <Mail className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            <span className="sr-only">Contact via email</span>
          </motion.button>
        </motion.a>
      </div>
    </div>
  );
}
