import { values } from "cypress/types/lodash";
import React from "react";
import SimpleButton from "../../button/SimpleButton/SimpleButton";
import AddTagInput from "./AddTagInput";
import Tag from "./Tag";

type Props = {
  label: string;
  value: string[];
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
};

const TagsInput = ({ label, value, onChange, onBlur }: Props) => {
  return (
    <div onBlur={onBlur}>
      <label className="block font-semibold">{label}:</label>
      <AddTagInput onAdd={(newTag) => onChange([...value, newTag])} />
      <div className="flex flex-wrap">
        {value.map((tag, index) => (
          <Tag
            name={tag}
            key={index}
            onDelete={() => onChange(value.filter((x) => x !== tag))}
          />
        ))}
      </div>
    </div>
  );
};

export default TagsInput;
