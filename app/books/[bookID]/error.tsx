"use client";

import React from "react";
import Link from "next/link";

const BookNotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
      <div className="max-w-md">
        <h2 className="mb-3 text-2xl font-semibold text-gray-800">
          Book Not Found
        </h2>
        <p className="mb-6 text-gray-600">
          Sorry, we couldn't find the book you're looking for. It might have
          been removed, renamed, or doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default BookNotFound;
