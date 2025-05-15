import { book_closed, bookmark } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const BookDetailsFooter = (props: Props) => {
  return (
    <div className="fixed bottom-0 flex w-full gap-4 border-y border-gray-300 bg-white px-4 py-2.5 md:hidden">
      <button className="aspect-square h-12 rounded-xl border border-gray-300">
        <Image
          src={bookmark}
          alt="bookmark"
          width={20}
          height={20}
          className="mx-auto aspect-square w-4.5"
        />
      </button>
      <button className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-green-300">
        <Image
          src={book_closed}
          alt="book closed"
          width={20}
          height={20}
          className="aspect-square w-4.5"
        />
        <span className="text-sm font-medium text-white">Start Reading</span>
      </button>
    </div>
  );
};

export default BookDetailsFooter;
