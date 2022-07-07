import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ENQUIRE_PRODUCT } from "../../../lib/graphql/operations";
import {
  ProductInquiry,
  ProductInquiryVariables,
} from "../../../lib/graphql/interfaces/ProductInquiry";
import { LoaderButton } from "../../buttons";
import { GenericInput, TextAreaInput } from "../../inputs";

type ProductEnquiryFormProps = {
  productId: string;
};

type EnquiryFormValues = {
  name: string;
  email: string;
  message: string;
};

function ProductEnquiryForm({ productId }: ProductEnquiryFormProps) {
  const [enquireProduct, { loading, error, data }] = useMutation<
    ProductInquiry,
    ProductInquiryVariables
  >(ENQUIRE_PRODUCT, { errorPolicy: "all" });

  const onSubmit = (values: FieldValues) => {
    enquireProduct({
      variables: {
        input: {
          name: values.name,
          email: values.email,
          message: values.message,
          productId,
        },
      },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormValues>();

  useEffect(() => {
    if (error)
      toast.error("Could not send you enquiry. Please try again later.");
    if (data && data.productInquiry) {
      toast.success("Your enquiry has been sent successfully.");
      reset();
    }
  }, [data]);

  return (
    <form
      className="flex flex-col space-y-5 text-sm mt-4"
      onSubmit={handleSubmit(onSubmit)}>
      <GenericInput
        label="Your Name"
        id="name"
        error={errors.name}
        {...register("name")}
      />
      <GenericInput
        label="Your Email"
        id="email"
        error={errors.email}
        {...register("email")}
      />
      <TextAreaInput
        label="Your Message"
        id="message"
        error={errors.message}
        {...register("message")}
      />
      {/* {error && <div className="text-red-500">{error.message}</div>} */}
      <LoaderButton className="px-3 py-2 self-center bg-black text-slate-100" label="Submit" type="submit" loading={loading} />
    </form>
  );
}

export default ProductEnquiryForm;
