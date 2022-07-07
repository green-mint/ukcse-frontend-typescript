import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { toast } from "react-toastify";
import SigninForm, {
  SignInFormInputs,
} from "../../components/auth/SigninForm/SigninForm";
import { MainLayout } from "../../components/layouts";
import RequireNoAuth from "../../lib/auth/guards/RequireNoAuth";
import useAuth from "../../lib/auth/useAuth";
import { Signin, SigninVariables } from "../../lib/graphql/interfaces/Signin";
import { SIGNIN } from "../../lib/graphql/operations";
import { NextPageWithLayout } from "../_app";

const SigninPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { signin } = useAuth();
  const [serverSignin, { loading, error, data }] = useMutation<
    Signin,
    SigninVariables
  >(SIGNIN);
  const submitHandler = async (values: SignInFormInputs) =>
    serverSignin({ variables: { input: values }, errorPolicy: "all" });

  useEffect(() => {
    if (error) toast.error(error.message);
    if (data) {
      toast.success("Successfully signed in!");
      signin(data.signIn);
      router.replace("/");
    }
  }, [data]);

  return (
    <div className="my-10 sm:my-24">
      <SigninForm onSubmit={submitHandler} />
    </div>
  );
};

SigninPage.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <RequireNoAuth>{page}</RequireNoAuth>
    </MainLayout>
  );
};

export default SigninPage;
