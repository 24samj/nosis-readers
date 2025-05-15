"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { book: Book };

const BookCard = ({ book }: Props) => {
  const { id, cover, title, author, parts } = book;
  const partText = `${parts.length} part${parts.length > 1 ? "s" : ""} • 12 mins`;

  // Shared text styles for the author/parts lines
  const infoClass =
    "text-disabled text-sm transition-colors group-hover:text-black";

  return (
    <Link
      href={`/books/${id}`}
      className="group flex min-w-[9rem] snap-start flex-col gap-3 pt-2 md:min-w-[13rem]"
    >
      <Image
        src={cover}
        alt={title}
        width={200}
        height={300}
        className="rounded-lg object-cover"
      />

      <div className="flex flex-col gap-1">
        <h3 className="line-clamp-2 font-semibold">{title}</h3>
        <span className={infoClass}>{author.name}</span>
        <span className={infoClass}>{partText}</span>
      </div>
    </Link>
  );
};

export default BookCard;
