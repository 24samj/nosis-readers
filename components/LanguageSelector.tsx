"use client";

import { ChevronDown, Languages } from "lucide-react";
import React from "react";

const LanguageSelector = () => {
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
    <details
      ref={detailsRef}
      className="relative hidden cursor-pointer lg:block"
    >
      <summary className="list-none rounded-lg border border-green-200 px-3 py-1">
        <div className="flex items-center gap-3">
          <Languages className="aspect-square w-4" />
          <span className="pl-2 text-sm">English</span>
          <ChevronDown className="aspect-square w-4 text-gray-500" />
        </div>
      </summary>
      <div className="absolute mt-2 w-full rounded-lg border bg-white p-2">
        hi ther
      </div>
    </details>
  );
};

export default LanguageSelector;
