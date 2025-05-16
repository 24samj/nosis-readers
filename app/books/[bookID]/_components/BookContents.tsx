import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {
  contents: Array<string>;
};

function toRomanNumeral(num: number): string {
  if (num <= 0 || num > 3999) {
    throw new Error("Number must be between 1 and 3999");
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  let remaining = num;

  for (const { value, numeral } of romanNumerals) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }

  return result;
}

function BookContents({ contents }: Props) {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h3 className="text-2xl font-semibold">Contents</h3>
      <div className="grid divide-y divide-gray-200">
        {contents.map((content) => (
          <div
            key={content}
            className="group flex items-center gap-3 px-4 py-2.5 transition-all hover:bg-green-50/25 hover:pl-6"
          >
            <span className="text-lg font-medium text-green-300">
              Part {toRomanNumeral(contents.indexOf(content) + 1)}
            </span>
            <span className="flex-1 text-lg font-medium text-gray-700">
              {content}
            </span>
            <ChevronRight className="aspect-square w-5 transition-all group-hover:-mr-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookContents;
