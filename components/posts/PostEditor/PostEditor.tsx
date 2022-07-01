import React from "react";
import GenericInput from "../../input/GenericInput/GenericInput";
import { useForm, Controller } from "react-hook-form";
import DropdownInput from "../../input/DropdownInput.jsx/DropdownInput";
import TagsInput from "../../input/TagsInput/TagsInput";
import QuillEditor from "../../input/QuillEditor/QuillEditor";
import LoaderButton from "../../button/LoaderButton/LoaderButton";

type Props = {
  onSubmit: (data: any) => void;
};

const PostEditor = ({ onSubmit }: Props) => {
  const { register, handleSubmit, control, formState: { isSubmitting } } = useForm();

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
            {...register("title")}
          />
          <GenericInput
            className="md:w-1/3 sm:w-1/2"
            label="Date"
            id="date"
            type="date"
            {...register("date")}
          />
          <Controller
            control={control}
            defaultValue="Technology"
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
          defaultValue={["hello", "world", "another", "tag"]}
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
          defaultValue="Hello World"
          name="content"
          render={({ field: { onBlur, onChange, value } }) => (
            <QuillEditor onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />
        <LoaderButton className="bg-green-600 mx-auto px-3 py-2 text-lg font-semibold text-white" loading={isSubmitting} label="Save" />
      </form>
    </div>
  );
};

export default PostEditor;
