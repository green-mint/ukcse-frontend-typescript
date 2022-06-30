import React from "react";
import SimpleButton from "../../button/SimpleButton/SimpleButton";

type Props = {
  onAdd: (...event: any[]) => void;
};

const AddTagInput = ({ onAdd }: Props) => {
  const [value, setValue] = React.useState("");

  const handleAdd = () => {
    if (value.length > 0) {
      onAdd(value);
      setValue("");
    }
  }

  return (
    <div>
      <input value={value} className="py-1 px-2 mb-3 bg-slate-200 rounded-md w-[20ch]" onChange={(e) => setValue(e.target.value.trim())} />
      <SimpleButton disabled={value.length === 0} className="px-3 py-1 text-white ml-3 bg-slate-600" label="Add Tag" onClick={handleAdd} />
    </div>
  );
};

export default AddTagInput;
