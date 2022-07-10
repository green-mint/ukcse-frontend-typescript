import React from "react";
import { CategoriesSideBar, MainLayout, ProductSideBar } from "../../../components/layouts";
import { Accordion, ImageSlider } from "../../../components/ui";
import useAuth from "../../../lib/auth/useAuth";
import client from "../../../lib/graphql";
import { GetProduct } from "../../../lib/graphql/interfaces/GetProduct";
import { GetProducts } from "../../../lib/graphql/interfaces/GetProducts";
import { GET_PRODUCT, GET_PRODUCTS } from "../../../lib/graphql/operations";
// import slick css
import "slick-carousel/slick/slick.css";
type Props = {
  product: GetProduct["product"];
};

const ProductPage = ({ product }: Props) => {
  const { isAuthenticated } = useAuth();

  return product ? (
    <div className="">
      <div className="lg:mr-64 mb-28 p-3 md:p-8">
        <div className="xl:w-2/3 mx-auto">
          <h1 className="text-center font-bold mt-5 text-2xl md:text-5xl mb-10">
            {product.title}
          </h1>
          <div className="max-w-xl mx-auto">
            <ImageSlider
              images={product.images.map(
                (image) => process.env.NEXT_PUBLIC_SERVER_ENDPOINT + "/" + image
              )}
            />
          </div>
          {/* Price Div */}
          <div className="flex items-end space-x-2 mt-10">
            <h3 className="text-lg md:text-2xl font-semibold">
              Price:{" "}
              <span className="text-sm font-normal md:text-lg">
                ${isAuthenticated ? product.memberPrice : product.price}
              </span>
            </h3>
          </div>

          {/* Description div */}
          <div className="mt-5">
            <h3 className="text-lg md:text-2xl font-semibold">Description:</h3>
            <p className="text-justify text-sm md:text-base">
              {product.description}
            </p>
          </div>

          {/* faqs div */}
          <div className="mt-5">
            <h3 className="text-lg md:text-2xl font-semibold">FAQs:</h3>
            <div className="mt-3 space-y-3 md:w-2/3">
              {product.FAQs.map((faq, index) => (
                <div key={index}>
                  {faq && (
                    <Accordion question={faq.question} answer={faq.answer} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-screen bottom-0 lg:w-64 lg:top-0 lg:right-0 bg-black   z-10">
        <ProductSideBar
          productId={product.id}
          price={isAuthenticated ? product.memberPrice : product.price}
          stock={product.stock}
        />
      </div>
    </div>
  ) : (
    <div>No product</div>
  );
};

type ProductStaticProps = {
  params: { productId: string };
};

export async function getStaticProps({ params }: ProductStaticProps) {
  const { data } = await client.query<GetProduct>({
    query: GET_PRODUCT,
    variables: {
      productId: params.productId,
    },
  });

  return {
    props: {
      product: data.product,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query<GetProducts>({
    query: GET_PRODUCTS,
  });

  return {
    paths: data.products.map((product) => ({
      params: {
        productId: product?.id,
      },
    })),
    fallback: "blocking",
  };
}

ProductPage.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <CategoriesSideBar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};

export default ProductPage;
