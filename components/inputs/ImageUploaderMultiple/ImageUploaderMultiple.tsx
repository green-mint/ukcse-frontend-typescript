import { useMutation } from "@apollo/client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import {
  UploadFile,
  UploadFileVariables,
} from "../../../lib/graphql/interfaces/UploadFile";
import { UPLOAD_FILE } from "../../../lib/graphql/operations";
import { LoaderButton } from "../../buttons";

type Props = {
  label: string;
  onChange?: (images: string[]) => void;
  onBlur?: () => void;
  id: string;
  defaultValue?: string[];
  showPreview?: boolean;
};

function ImageUploaderMultiple({
  label,
  onChange = () => null,
  onBlur,
  id,
  defaultValue,
  showPreview = true,
}: Props) {
  const [images, setImages] = useState<string[]>(defaultValue || []);

  const onAddImage = (imagePath: string) => {
    setImages([...images, imagePath]);
    onChange([...images, imagePath]);
  };

  const onRemoveImage = (imagePath: string) => {
    setImages(images.filter((image) => image !== imagePath));
    onChange(images.filter((image) => image !== imagePath));
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

    uploadFile({
      variables: { file },
    });
  };

  useEffect(() => {
    if (error) toast.error("Upload failed");
    if (data) {
      // if filename is not in images, add it
      if (!images.includes(data.uploadFile.filename))
        onAddImage(data.uploadFile.filename);
    }
  }, [data]);

  return (
    <div className="flex">
      <div className="mb-3">
        <label className="block font-semibold" htmlFor={`${id}`}>
          {label}:
        </label>
        {showPreview && images.length !== 0 && (
          <div className="flex -z-10 flex-wrap">
            {images.map((imagePath, index) => (
              <div key={index} className="relative m-2 rounded-md overflow-hidden w-56 aspect-square flex justify-between p-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/${imagePath}`}
                  layout="fill"
                />
                <div className="absolute top-2 right-2 p-1 rounded-md bg-red-600 text-white cursor-pointer hover:text-red-600 border border-red-600 hover:bg-white">
                  <MdDelete
                    onClick={() => onRemoveImage(imagePath)}
                    size={23}
                  />
                </div>
              </div>
            ))}
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

export default ImageUploaderMultiple;
