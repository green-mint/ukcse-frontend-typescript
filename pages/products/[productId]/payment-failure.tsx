import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { SimpleButton } from "../../../components/buttons";
import { CategoriesSideBar, MainLayout } from "../../../components/layouts";

function Failure() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className=" text-center mt-20 font bold">
      <div className="text-3xl">Yours Purchase failed :(</div>
      <Link href={`/products/${productId}`}>
        <SimpleButton label="Go Back" className="px-3 py-2 mt-4 bg-black text-white" />
      </Link>
    </div>
  );
}

Failure.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <CategoriesSideBar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};


export default Failure;
