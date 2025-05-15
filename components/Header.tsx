// Header.tsx (Server Component)
import { Search } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { headers } from "next/headers";
import Image from "next/image";
import { nosis_logo } from "@/assets";

type Props = {};

const getHeaderLabel = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/library":
      return "Library";
    case "/explore":
      return "Explore";
    default:
      return "Home";
  }
};

const Header = async (props: Props) => {
  const headerList = headers();
  const pathname = (await headerList).get("x-current-path");

  if (!pathname) return null;

  return (
    <div className="fixed top-0 right-0 left-0 z-30 flex h-16 items-center justify-between gap-4 bg-neutral-100 px-4 py-3.5 shadow-xs md:px-6 lg:justify-end">
      <div className="flex items-center gap-2 lg:hidden">
        <Image
          src={nosis_logo}
          alt="nosis logo"
          width={200}
          height={50}
          className="h-4 w-auto"
        />
        <span className="text-xl font-bold text-green-300">
          {getHeaderLabel(pathname)}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-end gap-2 md:gap-6">
        <div className="search-container flex items-center gap-2.5 rounded-lg bg-white px-3 py-1.5 shadow-sm shadow-black/10 backdrop-blur-md transition-all duration-300 ease-in-out focus-within:flex-1 md:min-w-56 md:gap-4 md:px-4 lg:min-w-96">
          <Search className="aspect-square w-4" />
          <input
            type="text"
            placeholder="Search for books"
            className="placeholder:text-disabled w-32 bg-transparent text-xs text-gray-700 placeholder:text-sm focus:outline-none md:text-sm"
          />
        </div>
        <div className="actions-container flex items-center gap-3">
          <LanguageSelector />
          <button className="rounded-lg bg-green-300 px-3 py-2 text-xs text-nowrap text-white transition-all hover:bg-green-200 hover:shadow-md md:px-6 md:text-sm">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
