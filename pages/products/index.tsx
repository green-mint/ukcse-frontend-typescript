import { useQuery } from "@apollo/client";
import React from "react";
import { MainLayout } from "../../components/layouts";
import { ProductCard } from "../../components/product";
import { Grid } from "../../components/ui";
import useAuth from "../../lib/auth/useAuth";
import {
  GetProducts,
  GetProductsVariables,
} from "../../lib/graphql/interfaces/GetProducts";
import { GET_PRODUCTS } from "../../lib/graphql/operations";

type Props = {};

const Products = (props: Props) => {
  const { loading, data, error } = useQuery<GetProducts, GetProductsVariables>(
    GET_PRODUCTS
  );

  const { isAuthenticated } = useAuth();

  return (
    <div className="px-5 pb-20">
      <h1 className="my-8 md:my-14 xl:my-20 text-3xl md:text-5xl xl:text-6xl text-center font-bold">
        Our Products
      </h1>
      <div>
        <Grid
          isLoading={loading}
          items={data?.products}
          renderItem={(product, index) => (
            <div key={product?.id}>
              {product && (
                <ProductCard
                  href={`/products/${product.id}`}
                  price={isAuthenticated ? product.memberPrice : product.price}
                  title={product.title}
                  thumbnail={`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/${product.thumbnail}`}
                />
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

Products.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Products;
