import React from "react";
import { GrClose } from "react-icons/gr";

type Props = {
  name: string;
  onDelete: () => void;
};

const Tag = ({ name, onDelete }: Props) => {
  return (
    <div
      className=" select-none bg-slate-200 mb-2 mr-2 p-1 px-2 rounded-md">
      <span>{name}</span>
      <GrClose onClick={onDelete} className="inline cursor-pointer text-white ml-1"  size={13}  aria-hidden="true" />
    </div>
  );
};

export default Tag;
