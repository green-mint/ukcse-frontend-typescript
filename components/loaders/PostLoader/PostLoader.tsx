import React from "react";

type Props = {};

const PostLoader = (props: Props) => {
  return (
    <div className="p-2">
      <div className="relative overflow-hidden transition-all bg-slate-300 animate-pulse delay-200 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square"></div>

      <div className="mt-3 cursor-pointer mb-1 w-[12ch] rounded-sm animate-pulse h-5 bg-slate-300"></div>

      <div className="cursor-pointer"></div>

      <div className="flex mt-2 items-end space-x-2">
      </div>

      <div className="w-full h-9 rounded-md bg-slate-300 animate-pulse delay-75"/>
      <div className="w-2/5 mt-1 rounded-md h-9 bg-slate-300 animate-pulse delay-75"/>
    </div>
  );
};

export default PostLoader;
