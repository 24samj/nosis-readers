import { book_closed, bookmark } from "@/assets";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type Action = {
  key: "read" | "bookmark";
  label: string;
  iconSrc: StaticImageData;
  iconAlt: string;
};

const ACTIONS: Action[] = [
  {
    key: "read",
    label: "Read",
    iconSrc: book_closed,
    iconAlt: "book closed",
  },
  {
    key: "bookmark",
    label: "Bookmark",
    iconSrc: bookmark,
    iconAlt: "bookmark",
  },
];

type Props = {
  type: "bookMonth" | "bookDetails";
};

const BookActions = ({ type }: Props) => {
  // For bookDetails we hide on small screens; for bookMonth we show always
  const containerClasses = clsx("flex gap-2", {
    // hidden: type === "bookDetails",
    "md:flex": type === "bookDetails",
  });

  return (
    <div className={containerClasses}>
      {ACTIONS.map(({ key, label, iconSrc, iconAlt }) => {
        const isPrimary = key === "read";
        // Styles differ per variant and per context
        const baseBtn =
          "flex flex-1 items-center justify-center gap-1 px-3 py-2 sm:px-4 md:px-10 md:py-3";
        const variantClasses = clsx(baseBtn, {
          // Primary (Read) is always green fill
          "rounded-lg bg-green-300 text-white":
            isPrimary && type === "bookMonth",
          "rounded-xl bg-green-300 text-white":
            isPrimary && type === "bookDetails",
          // Bookmark button
          "rounded-lg bg-white text-green-300":
            !isPrimary && type === "bookMonth",
          "rounded-xl border border-green-50 bg-white text-green-300":
            !isPrimary && type === "bookDetails",
        });

        return (
          <button key={key} className={variantClasses}>
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={20}
              height={20}
              className="aspect-square w-4"
            />
            <span className="text-xs font-medium md:text-sm">{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BookActions;
