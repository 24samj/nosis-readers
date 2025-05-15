import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  description: string;
};

const BookPreface = ({ description }: Props) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h3 className="text-2xl font-semibold">Preface</h3>

      <div className="group relative">
        <input
          type="checkbox"
          id="expand-collapse"
          className="peer absolute h-0 w-0 opacity-0"
        />

        <p className="text-disabled line-clamp-3 max-w-prose transition-all duration-300 ease-in-out peer-checked:line-clamp-none">
          {description}
        </p>

        <label
          htmlFor="expand-collapse"
          className="mt-2 flex cursor-pointer items-center gap-1 text-sm font-medium text-green-300 transition-all hover:text-green-600"
        >
          <span className="inline-flex items-center peer-checked:hidden">
            See more <ChevronDown className="aspect-square w-4" />
          </span>
          <span className="hidden items-center peer-checked:inline-flex">
            See less <ChevronUp className="aspect-square w-4" />
          </span>
        </label>
      </div>
    </div>
  );
};

export default BookPreface;
