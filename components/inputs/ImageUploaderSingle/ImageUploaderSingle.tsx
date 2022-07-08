import { useMutation } from "@apollo/client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  UploadFile,
  UploadFileVariables,
} from "../../../lib/graphql/interfaces/UploadFile";
import { UPLOAD_FILE } from "../../../lib/graphql/operations";
import { LoaderButton } from "../../buttons";

type Props = {
  label: string;
  onChange?: (imagePath: string) => void;
  onBlur?: () => void;
  id: string;
  defaultValue?: string;
  showPreview?: boolean;
};

function ImageUploader({
  label,
  onChange = () => null,
  onBlur,
  id,
  defaultValue,
  showPreview = true,
}: Props) {
  const [imagePath, setImagePath] = useState<string | undefined>(defaultValue);

  const changehandler = (imagePath: string) => {
    setImagePath(imagePath);
    onChange(imagePath);
  };

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [uploadFile, { loading, error, data }] = useMutation<
    UploadFile,
    UploadFileVariables
  >(UPLOAD_FILE, {
    errorPolicy: "all",
  });

  const fileUploadHandler = () => {
    if (!fileRef.current || !fileRef.current.files) return;

    const file = fileRef.current.files[0];

    if (!file) return;

    uploadFile({
      variables: { file },
    });
  };

  useEffect(() => {
    if (error) toast.error("Upload failed");
    if (data) {
      changehandler(data.uploadFile.filename);
    }
  }, [data]);

  return (
    <div className="flex">
      <div className="mb-3">
        <label className="block font-semibold" htmlFor={`${id}`}>
          {label}:
        </label>
        {showPreview && imagePath && (
          <div className="w-52 rounded-md overflow-hidden mt-2 relative aspect-square">
            <Image
              layout="fill"
              src={`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/${imagePath}`}
              alt="preview"
            />
          </div>
        )}
        <input
          className="form-control block w-full mt-1 py-1 text-base font-normal text-gray-700 bg-slate-100 bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
          id="formFile"
          onBlur={onBlur}
          ref={fileRef}
        />
        <LoaderButton
          label="Upload"
          onClick={fileUploadHandler}
          disabled={loading}
          loading={loading}
          className="p-1 px-2 mt-2 rounded-md text-white bg-black"
        />
      </div>
    </div>
  );
}

export default ImageUploader;
