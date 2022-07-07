import React from "react";
import { useForm } from "react-hook-form";
import { validateEmail, validateName, validatePassword } from "../../../helpers/form-validators"
import { LoaderButton } from "../../buttons";
import { GenericInput } from "../../inputs";

export type SignUpFormInputs = {
  email: string;
  name: string;
  password: string;
} 

type Props = {
  onSubmit: (values: SignUpFormInputs) => void;
};


const SignupForm = ({ onSubmit }: Props) => {
  const {
    register,
    formState: { isSubmitting, errors },
    reset,
    handleSubmit,
  } = useForm<SignUpFormInputs>();

  return (
    <form className="p-4 py-6 max-w-sm mx-auto bg-white rounded-md" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold text-center uppercase">SignUp</h1>
      <div className="flex mt-4 flex-col space-y-3">
        <GenericInput
          id="Name"
          label="Name"
          type="text"
          error={errors.name}
          {...register("name", { validate: validateName })}
        />
        <GenericInput
          id="Email"
          label="Email"
          type="email"
          error={errors.email}
          {...register("email", { validate: validateEmail })}
        />
        <GenericInput
          id="Password"
          label="Password"
          type="password"
          error={errors.password}
          {...register("password", { validate: validatePassword })}
        />
      </div>
      <LoaderButton
        className="px-3 py-2 mt-4 bg-black mx-auto text-white"
        loading={isSubmitting}
        type="submit"
        label="Signup"
      />
    </form>
  );
};

export default SignupForm;
