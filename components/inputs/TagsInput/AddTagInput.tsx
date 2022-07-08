import React, { useState } from "react";
import { SimpleButton } from "../../buttons";

type Props = {
  onAdd: (...event: any[]) => void;
  totalTags: number;
  maxTags?: number;
  maxLength?: number;
};

const AddTagInput = ({ onAdd, totalTags, maxTags=10, maxLength=18 }: Props) => {
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
      <input value={value} className={`py-1 px-2 bg-slate-200 rounded-md w-[${maxLength}ch]`} onChange={(e) => setValue(e.target.value.trim())} />
      <SimpleButton disabled={value.length === 0 || value.length > maxLength || totalTags === maxTags} className="px-3 py-1 text-white ml-3 bg-slate-600 disabled:bg-slate-400" label="Add" onClick={handleAdd} />
      {value.length > maxLength && <p className="text-red-500 text-sm">Tag must be less than {maxLength} characters</p>}
      {totalTags === maxTags && value.length > 0 && <p className="text-red-500 text-sm">You can only add {maxTags} tags</p>}
    </div>
  );
};

export default AddTagInput;
