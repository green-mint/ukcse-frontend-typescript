import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import RequireAdmin from "../../../lib/auth/guards/RequireAdmin";
import {
  CreateProduct,
  CreateProductVariables,
} from "../../../lib/graphql/interfaces/CreateProduct";
import { CREATE_PRODUCT } from "../../../lib/graphql/operations";

function NewProduct() {
  const router = useRouter();

  const [createProduct, { loading, error, data }] = useMutation<
    CreateProduct,
    CreateProductVariables
  >(CREATE_PRODUCT, {
    errorPolicy: "all",
  });

  useEffect(() => {
    createProduct({
      variables: {
        input: {
          title: "Untitled",
          description: "Your description here",
          FAQs: [],
          images: [],
          price: 0,
          memberPrice: 0,
          stock: 0,
        },
      },
    });
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("There was an error creating the post");
      console.log(error);
      // router.push("/");
    }

    if (data?.createProduct?.id) {
      router.replace(`/admin/products/${data.createProduct.id}`);
    }
  }, [loading]);

  return <div className="text-center py-5">Creating a new product...</div>;
}

NewProduct.getLayout = (page: React.ReactElement) => {
  return (
    <RequireAdmin>
      <div className="lg:ml-64 relative">{page}</div>
    </RequireAdmin>
  );
};

export default NewProduct;
