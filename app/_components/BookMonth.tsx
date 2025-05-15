import {
  book_closed,
  bookmark,
  nosis_logo_bg,
  nosis_logo_bg_2,
} from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {
  bookMonthBooks: Array<Book>;
};

const colors = ["rgba(218, 228, 255, 1)", "rgba(247, 229, 164, 1)"];

const BookActions = () => {
  return (
    <div className="flex gap-2">
      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-green-300 px-3 py-2 sm:px-4 md:px-10 md:py-3">
        <Image
          src={book_closed}
          alt="book closed"
          width={20}
          height={20}
          className="aspect-square w-4"
        />
        <span className="text-xs font-medium text-white md:text-sm">Read</span>
      </button>
      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-white px-3 py-2 sm:px-4 md:px-10 md:py-3">
        <Image
          src={bookmark}
          alt="bookmark"
          width={20}
          height={20}
          className="aspect-square w-4"
        />
        <span className="text-xs font-medium text-green-300 md:text-sm">
          Bookmark
        </span>
      </button>
    </div>
  );
};

const BookTab = ({ book, index }: { book: Book; index: number }) => {
  return (
    <div
      style={{
        backgroundColor: colors[index],
      }}
      className="relative mt-2 flex w-full gap-2 overflow-hidden rounded-lg p-3 sm:gap-4 sm:p-4 lg:mt-0 lg:flex-1"
    >
      <Image
        src={book.cover}
        alt={book.title}
        width={133}
        height={200}
        className="h-40 w-24 flex-shrink-0 rounded-lg object-contain sm:h-52 sm:w-32"
      />
      <div className="relative z-20 flex flex-col justify-between">
        <h3 className="line-clamp-2 text-base font-semibold sm:text-lg">
          {book.title}
        </h3>
        <span className="text-disabled text-xs sm:text-sm">
          {book.author.name}
        </span>
        <span className="text-xs sm:text-sm">0 mins</span>
        <BookActions />
        <p className="text-disabled invisible line-clamp-2 text-xs sm:text-sm md:visible md:max-w-80">
          {book.description}
        </p>
      </div>
      <Image
        src={index !== 0 ? nosis_logo_bg : nosis_logo_bg_2}
        alt="nosis logo"
        width={250}
        height={500}
        className="absolute -right-16 bottom-0 z-10 max-h-full pt-12 opacity-50 sm:opacity-100 md:-right-4 lg:hidden"
      />
    </div>
  );
};

const BookMonth = ({ bookMonthBooks }: Props) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold sm:text-2xl">Books Month</h2>
      <div className="gap-3 md:gap-6 lg:flex lg:grid-cols-2">
        {bookMonthBooks.slice(0, 2).map((book, index) => (
          <BookTab key={book.id} book={book} index={index} />
        ))}
      </div>
    </section>
  );
};

export default BookMonth;
