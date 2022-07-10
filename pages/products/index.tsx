import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { CategoriesSideBar, MainLayout } from "../../components/layouts";
import { ProductLoader } from "../../components/loaders";
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
  const [pageNum, setPageNum] = useState(0);
  
  const { loading, data, error, fetchMore } = useQuery<GetProducts, GetProductsVariables>(
    GET_PRODUCTS,
    { variables: { filter: { take: 9, page: 0 } } }
  );

  const { isAuthenticated } = useAuth();

  const loadMore = () => {
    fetchMore({
      variables: {
        filter: {
          take: 9,
          page: pageNum + 1,
        },
      },
    });
    setPageNum(pageNum + 1);
  }

  if (error) return <p>Error :(</p>;

  return (
    <div className="px-5 pb-20">
      <h1 className="my-8 md:my-14 xl:my-20 text-3xl md:text-5xl xl:text-6xl text-center font-bold">
        Our Products
      </h1>
      <div>
        <Grid
          isLoading={loading}
          loader={<ProductLoader />}
          items={data?.products}
          onEndReached={loadMore}
          renderItem={(product) => (
            <div key={product?.id}>
              {product && (
                <ProductCard
                  href={`/products/${product.id}`}
                  price={isAuthenticated ? product.memberPrice : product.price}
                  title={product.title}
                  thumbnail={`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/${
                    product.thumbnail
                      ? product.thumbnail
                      : "public/images/unavailable.png"
                  }`}
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
  return (
    <MainLayout>
      <CategoriesSideBar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};

export default Products;
