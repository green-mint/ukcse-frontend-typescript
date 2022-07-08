import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { MainLayout, AdminSidebar } from "../../../components/layouts";
import ProductEditor, {
  ProductEditorValues,
} from "../../../components/product/ProductEditor/ProductEditor";
import { GetProduct } from "../../../lib/graphql/interfaces/GetProduct";
import {
  UpdateProduct,
  UpdateProductVariables,
} from "../../../lib/graphql/interfaces/UpdateProduct";
import { GET_PRODUCT, UPDATE_PRODUCT } from "../../../lib/graphql/operations";

type Props = {};

const Edit = (props: Props) => {
  const { productId } = useRouter().query;

  const { loading, error, data } = useQuery<GetProduct>(GET_PRODUCT, {
    variables: { productId },
  });

  const [
    updateProduct,
    { error: updateError, loading: updateLoading, data: updateData },
  ] = useMutation<UpdateProduct, UpdateProductVariables>(UPDATE_PRODUCT, {
    errorPolicy: "all",
  });

  const updateProductHandler = (product: ProductEditorValues) => {
    updateProduct({
      variables: {
        input: {
          description: product.description,
          FAQs: product.faqs,
          images: product.images,
          title: product.name,
          price: parseInt(product.price),
          memberPrice: parseInt(product.memberPrice),
          stock: parseInt(product.stock),
        },
        updateProductId: productId,
      },
    });
  };

  useEffect(() => {
    if (updateError) {
      console.log(updateError);
      toast.error("Error updating product");
    }
    if (updateData) toast.success("Product updated");
  }, [updateLoading]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1 className="text-2xl text-center my-10 font-semibold">
        Product: {productId}
      </h1>

      {data && data.product && (
        <div className="max-w-xl mx-auto mb-12">
          <ProductEditor
            onSubmit={updateProductHandler}
            defaultValues={{
              name: data.product.title,
              description: data.product.description,
              price: data.product.price.toString(),
              memberPrice: data.product.memberPrice.toString(),
              images: data.product.images,
              faqs: data.product.FAQs,
              stock: data.product.stock.toString(),
            }}
          />
        </div>
      )}
    </div>
  );
};

Edit.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <AdminSidebar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};

export default Edit;
