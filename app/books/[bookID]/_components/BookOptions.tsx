"use client";

import {
  circle_exclaim,
  hand_key,
  share_outline,
  star_rounded,
  three_dot_menu,
} from "@/assets";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Option = {
  icon: StaticImageData;
  label: string;
};

const options: Option[] = [
  { icon: circle_exclaim, label: "Report" },
  { icon: hand_key, label: "Claim this page" },
  { icon: star_rounded, label: "Rate this title" },
  { icon: share_outline, label: "Share" },
];

export default function BookOptions() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(e.target as Node)
      ) {
        detailsRef.current.removeAttribute("open");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Animation variants
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.05 },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { when: "afterChildren" },
    },
  };
  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -5 },
  };

  return (
    <details ref={detailsRef} className="relative cursor-pointer">
      <summary className="list-none">
        <Image
          src={three_dot_menu}
          alt="three dot menu"
          width={24}
          height={24}
          className="aspect-square w-6"
        />
      </summary>

      <AnimatePresence>
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="absolute right-0 mt-2 min-w-40 overflow-hidden rounded-lg bg-white shadow md:min-w-56"
        >
          <div className="grid divide-y divide-gray-100">
            {options.map((opt) => (
              <motion.button
                key={opt.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2.5 px-3 py-3 hover:bg-gray-50 md:py-4"
                onClick={() => detailsRef.current?.removeAttribute("open")}
              >
                <Image
                  src={opt.icon}
                  alt={opt.label}
                  width={20}
                  height={20}
                  className="aspect-square w-4"
                />
                <span className="text-dark-200 text-sm font-medium whitespace-nowrap">
                  {opt.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </details>
  );
}
