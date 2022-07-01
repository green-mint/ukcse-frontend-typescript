import React, { useState } from "react";
import SimpleButton from "../../button/SimpleButton/SimpleButton";

type Props = {
  onAdd: (...event: any[]) => void;
  totalTags: number;
};

const AddTagInput = ({ onAdd, totalTags }: Props) => {
  const [value, setValue] = useState("");
  // const [touched, setTouched] = useState(false);

  const handleAdd = () => {
    if (value.length > 0 || value.length > 18) {
      onAdd(value);
      setValue("");
    }    
  }

  return (
    <div className="mb-3">
      <input value={value} className="py-1 px-2 bg-slate-200 rounded-md w-[18ch]" onChange={(e) => setValue(e.target.value.trim())} />
      <SimpleButton disabled={value.length === 0 || value.length > 18 || totalTags === 10} className="px-3 py-1 text-white ml-3 bg-slate-600 disabled:bg-slate-400" label="Add Tag" onClick={handleAdd} />
      {value.length > 18 && <p className="text-red-500 text-sm">Tag must be less than 18 characters</p>}
      {totalTags === 10 && value.length > 0 && <p className="text-red-500 text-sm">You can only add 10 tags</p>}
    </div>
  );
};

export default AddTagInput;
