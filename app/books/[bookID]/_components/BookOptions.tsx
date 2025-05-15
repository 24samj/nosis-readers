"use client";

import {
  circle_exclaim,
  hand_key,
  share_outline,
  star_rounded,
  three_dot_menu,
} from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const options = [
  {
    icon: circle_exclaim,
    label: "Report",
  },
  {
    icon: hand_key,
    label: "Claim this page",
  },
  {
    icon: star_rounded,
    label: "Rate this title",
  },
  {
    icon: share_outline,
    label: "Share ",
  },
];

const BookOptions = (props: Props) => {
  const detailsRef = React.useRef<HTMLDetailsElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!detailsRef.current) return;

      const target = event.target as Node;
      if (!detailsRef.current.contains(target)) {
        detailsRef.current.removeAttribute("open");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
      <div className="absolute right-0 mt-2 min-w-40 overflow-hidden rounded-lg bg-white md:min-w-56">
        <div className="grid divide-y divide-gray-100">
          {options.map((option) => (
            <button
              key={option.label}
              className="flex items-center gap-2.5 px-3 py-3 hover:bg-gray-50 md:py-4"
            >
              <Image
                src={option.icon}
                alt={option.label}
                width={20}
                height={20}
                className="aspect-square w-4"
              />
              <span className="text-dark-200 text-sm font-medium text-nowrap">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </details>
  );
};

export default BookOptions;
