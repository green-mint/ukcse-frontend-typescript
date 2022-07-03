import React from "react";

type Props = {
  children: React.ReactNode;
};

const Grid = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:max-w-5xl xl:mx-auto">
      {children}
    </div>
  );
};

export default Grid;
