import React from "react";

type Props = {};

const FadedFooter = (props: Props) => {
  return (
    <div className="px-6">
      <p className="text-dark-75 text-[2.5rem] font-bold">
        next gen.,
        <br /> library.
      </p>
      <span className="text-dark-75 pt-3 text-xs">
        the world’s largest digital library.
      </span>
    </div>
  );
};

export default FadedFooter;
