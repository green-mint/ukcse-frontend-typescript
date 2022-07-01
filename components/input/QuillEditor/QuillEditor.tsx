import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type Props = {
  value: string;
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
};

let toolbarOptions = [
  [{ font: [] }, { size: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "super" }, { script: "sub" }],
  [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  ["direction", { align: [] }],
  ["link", "image", "video", "formula"],
  ["clean"],
];

const QuillEditor = ({ value, onBlur, onChange }: Props) => {

  return (
    <ReactQuill
      preserveWhitespace={true}
      defaultValue={value}
      modules={{
        toolbar: toolbarOptions,
      }}
      onChange={onChange}
    />
  );
};

export default QuillEditor;
