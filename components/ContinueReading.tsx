import { clock } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  books: Array<Book>;
};

const ResumeBookCard = ({ book }: { book: Book }) => {
  return (
    <Link
      href={`/books/${book.id}`}
      className="flex max-w-72 min-w-72 gap-4 rounded-lg bg-white p-4 md:max-w-96 md:min-w-96"
    >
      <Image
        src={book.cover}
        alt={book.title}
        width={96}
        height={144}
        className="overflow-hidden rounded-lg"
      />
      <div className="book-details flex flex-1 flex-col justify-between">
        <h3 className="line-clamp-2 font-semibold md:font-medium">
          {book.title}
        </h3>
        <span className="text-disabled text-xs">{book.author.name}</span>
        <div className="flex flex-col gap-2">
          <progress
            className="progress h-1.5 w-full rounded-full [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-green-500 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-green-500"
            value="50"
            max="100"
          />
          <div className="inline-flex items-center gap-3 md:justify-between">
            <span className="text-disabled text-2xs">67% Complete</span>
            <div className="flex gap-1">
              <Image
                src={clock}
                alt="clock"
                width={14}
                height={14}
                className="aspect-square w-3.5"
              />
              <span className="text-2xs text-disabled">15 mins</span>
            </div>
          </div>
        </div>
        <button className="block max-w-fit rounded-lg border border-green-200 bg-neutral-50 px-3 py-2 text-xs font-medium text-green-300 md:hidden lg:block lg:rounded-full">
          Continue Reading
        </button>
      </div>
    </Link>
  );
};

const ContinueReading = ({ books }: Props) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">Continue Reading</h2>
      <div className="no-scrollbar flex gap-6 overflow-scroll">
        {books.map((book) => (
          <ResumeBookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default ContinueReading;
