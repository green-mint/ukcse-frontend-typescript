import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import Link from "next/link";
import { GET_PRODUCTS } from "../../../lib/graphql/operations";
import { GetProducts } from "../../../lib/graphql/interfaces/GetProducts";
import { GrFormView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { AdminSidebar, MainLayout } from "../../../components/layouts";

function Products() {
  // fetch products
  const { error, loading, data, refetch } = useQuery<GetProducts>(GET_PRODUCTS);

  // const [
  //   deletePost,
  //   { loading: deleteLoading, error: deleteError, data: deleteData },
  // ] = useMutation<DeletePost, DeletePostVariables>(DELETE_PR, { errorPolicy: "all" });

  // useEffect(() => {
  //   if (deleteError) {
  //     toast.error(deleteError.message);
  //   }

  //   if (deleteData) {
  //     refetch();
  //     toast.success("Post deleted");
  //   }
  // }, [deleteData]);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-16">
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
        Products
      </h1>
      <div className="space-x-5 text-center mb-10">
        <button className="p-2 mt-8 bg-black text-white rounded-md border border-black hover:text-black hover:bg-white">
          <Link href="/admin/products/new">+ Create New Product</Link>
        </button>
        <button
          onClick={() => refetch()}
          className="p-2 mt-8 bg-black text-white rounded-md border border-black hover:text-black hover:bg-white">
          Refresh
        </button>
      </div>
      <div>
        <table className="table border-collapse mx-auto">
          <thead className="table-header-group">
            <th className="p-2 border-1 border">ID</th>
            <th className="p-2 border-1 border">Name</th>
            <th className="p-2 border border-1">View</th>
            <th className="p-2 border border-1">Edit</th>
            <th className="p-2 border border-1">Delete</th>
          </thead>

          <tbody>
            {data &&
              data.products &&
              data.products.map(
                (product, index) =>
                  product && (
                    <tr className="" key={product.id}>
                      <td className="p-2 table-cell border border-1">
                        {product.id}
                      </td>
                      <td className="p-2 table-cell border border-1">
                        {product.title}
                      </td>
                      <td className="p-2 border border-1">
                        <Link href={`/products/${product.id}/`}>
                          <GrFormView className="cursor-pointer" size={24} />
                        </Link>
                      </td>
                      <td className="p-2 border border-1 cursor-pointer">
                        <Link href={`/admin/products/${product.id}`}>
                          <FaRegEdit className="cursor-pointer" size={24} />
                        </Link>
                      </td>
                      <td className="p-2 border border-1 cursor-pointer">
                        <AiFillDelete
                          className="cursor-pointer"
                          size={24}
                          // onClick={() =>
                          //   deletePost({
                          //     variables: { deletePostId: post.id },
                          //   })
                          // }
                        />
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Products.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <AdminSidebar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};

export default Products;
