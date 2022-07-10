import { gql, useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { SimpleButton } from "../../../components/buttons";

type Props = {};

const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token)
  }
`;

const VerifyUser = (props: Props) => {
  const router = useRouter();
  const { token } = router.query;

  const [verifyUser, { loading, error, data }] = useMutation(VERIFY_USER);

  console.log(token);
  console.log(loading, error, data);

  useEffect(() => {
    if (token) verifyUser({ variables: { token } });
  }, [token]);

  useEffect(() => {
    if (error) toast.error("Your token could not be verified");
  }, [data]);

  if (!token) {
    return <div>No token</div>;
  }

  if (loading) return <div>Loading...</div>;

  if (!loading && !error && data)
    return (
      <div className="mt-5">
        <h1 className="text-center text-2xl font-bold">
          Your token was verified
        </h1>
        <div className="mt-2 flex justify-center">
          <Link href="/auth/signin">
            <SimpleButton
              label="Signin"
              className="px-2 py-1 text-white bg-black"
            />
          </Link>
        </div>
      </div>
    );

  return <div></div>;
};

export default VerifyUser;
