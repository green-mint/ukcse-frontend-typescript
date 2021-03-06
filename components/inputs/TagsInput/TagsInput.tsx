import { values } from "cypress/types/lodash";
import React from "react";
import AddTagInput from "./AddTagInput";
import Tag from "./Tag";

type Props = {
  label: string;
  value: string[];
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
  maxTags?: number;
  maxLength?: number;
};

const TagsInput = ({ label, value, onChange, onBlur, maxTags=10, maxLength=18 }: Props) => {

  return (
    <div onBlur={onBlur}>
      <label className="block font-semibold">{label}:</label>
      <AddTagInput totalTags={value.length} maxTags={maxTags} maxLength={maxLength} onAdd={(newTag) => onChange([...value, newTag])} />
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
