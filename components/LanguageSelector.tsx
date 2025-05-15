"use client";
import { ChevronDown, Languages } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Language = {
  id: string;
  name: string;
  code: string;
};

const LanguageSelector = () => {
  const languages: Language[] = [
    { id: "en", name: "English", code: "EN" },
    { id: "es", name: "Spanish", code: "ES" },
    { id: "fr", name: "French", code: "FR" },
    { id: "de", name: "German", code: "DE" },
    { id: "ja", name: "Japanese", code: "JP" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0],
  );
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!detailsRef.current) return;
      const target = event.target as Node;
      if (!detailsRef.current.contains(target)) {
        detailsRef.current.removeAttribute("open");
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  return (
    <details
      ref={detailsRef}
      className="relative hidden cursor-pointer lg:block"
      onToggle={handleToggle}
    >
      <summary className="list-none rounded-lg border border-green-200 px-3 py-1 transition-colors duration-200 hover:bg-green-50">
        <div className="flex items-center gap-3">
          <Languages className="aspect-square w-4" />
          <div className="relative h-5 w-16 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={selectedLanguage.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 text-sm"
              >
                {selectedLanguage.name}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="aspect-square w-4 text-gray-500" />
          </motion.div>
        </div>
      </summary>

      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute mt-2 w-48 rounded-lg border border-green-100 bg-white p-2 shadow-lg"
      >
        <div className="space-y-1">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => handleLanguageSelect(language)}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-green-50"
            >
              <span className="font-medium">{language.name}</span>
              <span className="ml-auto text-xs text-gray-400">
                {language.code}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </details>
  );
};

export default LanguageSelector;
