import React from "react";
import GenericInput from "../../input/GenericInput/GenericInput";
import { useForm, Controller } from "react-hook-form";
import DropdownInput from "../../input/DropdownInput.jsx/DropdownInput";
import TagsInput from "../../input/TagsInput/TagsInput";

type Props = {};

const PostEditor = (props: Props) => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
        <GenericInput label="Title" id="title" {...register("title")} />
        <GenericInput
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
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostEditor;
