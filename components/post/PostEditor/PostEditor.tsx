import { data } from "cypress/types/jquery";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { LoaderButton } from "../../buttons";
import {
  DropdownInput,
  GenericInput,
  QuillEditor,
  TagsInput,
} from "../../inputs";
import ImageUploader from "../../inputs/ImageUploaderSingle/ImageUploaderSingle";

export type PostValues = {
  title: string;
  content: string;
  tags: string[];
  category: string;
  thumbnail: string;
  date: string;
};

type Props = {
  onSubmit: (data: any) => void;
  defaultValues: PostValues;
  categories: string[];
};

const PostEditor = ({ onSubmit, defaultValues, categories }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm();

  return (
    <div className="sm:px-1 md:px-5 lg:max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <GenericInput
            className="md:w-1/3 sm:w-1/2"
            label="Title"
            id="title"
            defaultValue={defaultValues.title}
            {...register("title")}
          />
          <GenericInput
            className="md:w-1/3 sm:w-1/2"
            defaultValue={defaultValues.date}
            label="Date"
            id="date"
            type="date"
            {...register("date")}
          />
          <Controller
            control={control}
            defaultValue={defaultValues.category}
            name="category"
            render={({ field: { onBlur, onChange, value } }) => (
              <DropdownInput
                className="md:w-1/3 sm:w-1/2"
                options={[
                  "Technology",
                  "Current Affairs",
                  "Romance",
                  "Health",
                  "Science",
                ]}
                label="Category"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </div>

        <Controller
          control={control}
          defaultValue={defaultValues.tags}
          name="tags"
          render={({ field: { onBlur, onChange, value } }) => (
            <TagsInput
              label="Tags"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <Controller
          control={control}
          defaultValue={defaultValues.thumbnail}
          name="thumbnail"
          render={({ field: { onBlur, onChange, value } }) => (
            <ImageUploader
              onChange={onChange}
              defaultValue={defaultValues.thumbnail}
              label="Thumbnail"
              id="thumbnail"
            />
          )}
        />
        <Controller
          control={control}
          defaultValue={defaultValues.content}
          name="content"
          render={({ field: { onBlur, onChange, value } }) => (
            <QuillEditor onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />  
        <LoaderButton
          className="bg-green-600 mx-auto px-3 py-2 text-lg font-semibold text-white"
          loading={isSubmitting}
          label="Save"
        />
      </form>
    </div>
  );
};

export default PostEditor;
