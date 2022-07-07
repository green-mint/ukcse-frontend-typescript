import React from "react";

type Props = {};

const ProductLoader = (props: Props) => {
  return (
    <div className={` group`}>
      <div className="relative overflow-hidden transition-all bg-slate-300 animate-pulse delay-150 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square" />

      <div className="mt-3 w-3/5 h-7 animate-pulse delay-200 bg-slate-300 rounded-md" />

      <div className="bg-slate-300 w-2/5 h-5 animate-pulse delay-75 mt-2 rounded-md" />
    </div>
  );
};

export default ProductLoader;
