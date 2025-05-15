import { book_closed, bookmark } from "@/assets";
import Image from "next/image";

const BookActions = () => {
  return (
    <div className="hidden gap-2 md:flex">
      <button className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-green-300 px-3 py-2 sm:px-4 md:px-10 md:py-3">
        <Image
          src={book_closed}
          alt="book closed"
          width={20}
          height={20}
          className="aspect-square w-4"
        />
        <span className="text-xs font-medium text-white md:text-sm">Read</span>
      </button>
      <button className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-green-50 bg-white px-3 py-2 sm:px-4 md:px-10 md:py-3">
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

export default BookActions;
