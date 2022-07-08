import React from "react";
import { Controller, useForm } from "react-hook-form";
import { LoaderButton } from "../../buttons";
import { GenericInput, TextAreaInput } from "../../inputs";
import ImageUploaderMultiple from "../../inputs/ImageUploaderMultiple/ImageUploaderMultiple";
import FAQEditor from "./FAQEditor";

export type ProductEditorValues = {
  name: string;
  price: string;
  memberPrice: string;
  description: string;
  stock: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  images: string[];
};

type Props = {
  defaultValues: ProductEditorValues;
  onSubmit: (values: ProductEditorValues) => void;
  loading?: boolean;
};

const ProductEditor = ({ defaultValues, onSubmit, loading=false }: Props) => {
  const { register, control, handleSubmit } = useForm<ProductEditorValues>();

  return (
    <div>
      <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <GenericInput
          id="name"
          label="Name"
          {...register("name")}
          defaultValue={defaultValues.name}
        />
        <GenericInput
          type="number"
          id="price"
          label="Price"
          defaultValue={defaultValues.price}
          {...register("price")}
        />
        <GenericInput
          type="number"
          id="memberPrice"
          label="Member Price"
          {...register("memberPrice")}
          defaultValue={defaultValues.memberPrice}
        />
        <GenericInput
          type="number"
          id="stock"
          label="Stock"
          {...register("stock")}
          defaultValue={defaultValues.stock}
        />
        <TextAreaInput
          id="description"
          label="Description"
          {...register("description")}
          defaultValue={defaultValues.description}
        />
        <Controller
          control={control}
          name="faqs"
          render={({ field: { onChange, onBlur } }) => (
            <FAQEditor
              onChange={onChange}
              defaultValue={defaultValues.faqs}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="images"
          render={({ field: { onChange, onBlur } }) => (
            <ImageUploaderMultiple
              label="Images"
              id="timages"
              showPreview={true}
              onChange={onChange}
              defaultValue={defaultValues.images}
              onBlur={onBlur}
            />
          )}
        />

        <LoaderButton label="Save" className="bg-green-600 px-3 py-2 text-white mx-auto" loading={loading} />
      </form>
    </div>
  );
};

export default ProductEditor;
