"use client";

import {
  about_us,
  circle_help,
  facebook,
  gift,
  home,
  instagram,
  library,
  my_account,
  nosis_logo,
  nosis_logo_text,
  search,
  twitter,
} from "@/assets";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const options = [
  {
    name: "Home",
    href: "/",
    icon: home,
  },
  {
    name: "Explore",
    href: "/explore",
    icon: search,
  },
  {
    name: "Library",
    href: "/library",
    icon: library,
  },
];

const bottomOptions = [
  {
    name: "Request a book",
    href: "/request",
    icon: circle_help,
  },
  {
    name: "About Us",
    href: "/about",
    icon: about_us,
  },
  {
    name: "My Account",
    href: "/account",
    icon: my_account,
  },
];

const socialOptions = [
  {
    name: "Twitter",
    href: "https://twitter.com/nosisbooks",
    icon: twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/nosisbooks",
    icon: instagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/nosisbooks",
    icon: facebook,
  },
];

const Navbar = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        // Mobile styling - fixed at bottom
        "fixed bottom-0 left-0 z-40 flex w-full flex-row justify-around bg-neutral-50 px-4 py-3 shadow-md shadow-black/20 backdrop-blur-sm",
        // Desktop styling - sticky on left
        "lg:sticky lg:top-0 lg:h-screen lg:w-fit lg:min-w-60 lg:flex-col lg:justify-start lg:gap-6 lg:self-start lg:bg-neutral-100 lg:py-6",
        {
          "hidden md:hidden": pathname !== "/",
          "lg:flex": true,
        },
      )}
    >
      {/* Logo - Only visible on desktop */}
      <div className="mx-auto hidden h-8 items-center gap-2 lg:flex">
        <Image
          src={nosis_logo}
          alt="nosis logo"
          width={200}
          height={50}
          className="aspect-square w-12"
        />
        <Image
          src={nosis_logo_text}
          alt="nosis logo text"
          width={200}
          height={50}
          className="w-full"
        />
      </div>

      {/* Main Options - Always visible */}
      <div className="flex w-full flex-row justify-around lg:flex-1 lg:flex-col lg:justify-start lg:gap-2 lg:pt-4">
        {options.map((option) => (
          <Link
            key={option.name}
            href={option.href}
            className="flex flex-col items-center gap-1 lg:flex-row lg:gap-2 lg:px-3 lg:py-2"
          >
            <Image
              src={option.icon}
              alt={option.name}
              width={20}
              height={20}
              className="aspect-square w-5"
            />
            <span
              className={clsx("text-xs lg:text-sm", {
                "text-disabled hover:text-dark-300 transition-colors":
                  pathname !== option.href,
                "font-semibold text-gray-700": pathname === option.href,
              })}
            >
              {option.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Elements only visible on desktop */}
      <div className="hidden lg:block">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <Image
            src={gift}
            alt="gift"
            width={20}
            height={20}
            className="aspect-square w-5"
          />
          <span className="text-sm font-medium">Invite Friends</span>
        </button>
      </div>

      <div className="hidden lg:flex lg:flex-col lg:gap-2">
        {bottomOptions.map((option) => (
          <Link
            key={option.name}
            href={option.href}
            className="flex items-center gap-3 px-3 py-2"
          >
            <Image
              src={option.icon}
              alt={option.name}
              width={20}
              height={20}
              className="aspect-square w-5"
            />
            <span
              className={clsx("text-sm", {
                "text-disabled hover:text-dark-300 transition-colors":
                  pathname !== option.href,
                "font-semibold text-gray-700": pathname === option.href,
              })}
            >
              {option.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex lg:gap-4 lg:px-3 lg:py-2">
        {socialOptions.map((option) => (
          <Link
            key={option.name}
            href={option.href}
            className="flex items-center gap-2"
          >
            <Image
              src={option.icon}
              alt={option.name}
              width={20}
              height={20}
              className="aspect-square w-5"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
