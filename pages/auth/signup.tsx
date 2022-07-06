import { useMutation } from "@apollo/client";
import React, { ReactElement, useEffect } from "react";
import { toast } from "react-toastify";
import SignupForm, {
  SignUpFormInputs,
} from "../../components/auth/SignupForm/SignupForm";
import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import RequireNoAuth from "../../lib/auth/guards/RequireNoAuth";
import { SignupVariables, Signup } from "../../lib/graphql/interfaces/Signup";
import { SIGNUP } from "../../lib/graphql/operations";
import { NextPageWithLayout } from "../_app";

const SignupPage: NextPageWithLayout = () => {
  const [signup, { loading, error, data }] = useMutation<
    Signup,
    SignupVariables
  >(SIGNUP);
  const submitHandler = async (values: SignUpFormInputs) =>
    signup({ variables: { input: values } });

  useEffect(() => {
    if (error) toast.error(error.message);
    if (data) {
      toast.success("Successfully signed up!");
      console.log(data);
    }
  }, [data]);

  return (
    <div className="my-10 sm:my-24">
      <SignupForm onSubmit={submitHandler} />
    </div>
  );
};

SignupPage.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <RequireNoAuth>{page}</RequireNoAuth>
    </MainLayout>
  );
};

export default SignupPage;
