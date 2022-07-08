import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useEffect } from "react";
import { MainLayout } from "../../components/layouts";
import AdminSidebar from "../../components/layouts/AdminSidebar/AdminSidebar";
import { GetPosts } from "../../lib/graphql/interfaces/GetPosts";
import { DELETE_POST, GET_POSTS } from "../../lib/graphql/operations";
import { AiFillDelete } from"react-icons/ai"
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { DeletePost, DeletePostVariables } from "../../lib/graphql/interfaces/DeletePost";
import { toast } from "react-toastify";

type Props = {};

const AdminPosts = (props: Props) => {

  const { loading, error, data, refetch } = useQuery<GetPosts>(GET_POSTS);

  const [
    deletePost,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation<DeletePost, DeletePostVariables>(DELETE_POST, { errorPolicy: "all" });

  useEffect(() => {
    if (deleteError) {
      toast.error(deleteError.message);
    }

    if (deleteData) {
      refetch();
      toast.success("Post deleted");
    }
  }, [deleteData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    data && <div className="text-center">
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
        Posts
      </h1>
      <div className="space-x-5">
        <button className="p-2 mt-8 bg-black text-white rounded-md border border-black hover:text-black hover:bg-white">
          <Link href="/posts/new">+ Create New Post</Link>
        </button>
        <button
          // onClick={() => refetch()}
          className="p-2 mt-8 bg-black text-white rounded-md border border-black hover:text-black hover:bg-white">
          Refresh
        </button>
      </div>

      <table className="table text-left mx-auto my-5">
        <thead className="table-header-group">
          <th className="p-2 border border-1">ID</th>
          <th className="p-2 border border-1">Name</th>
          <th className="p-2 border border-1">View</th>
          <th className="p-2 border border-1">Edit</th>
          <th className="p-2 border border-1">Delete</th>
        </thead>
        <tbody className="table-row-group">
          {data.posts.map((post, index) => (
            post && <tr key={index} className="">
              <td className="p-2 border border-1">{post.id}</td>
              <td className="p-2 border border-1">{post.title}</td>
              <td className="p-2 border border-1">
                <Link href={`/posts/${post.id}/`}>
                  <GrFormView className="cursor-pointer" size={24} />
                </Link>
              </td>
              <td className="p-2 border border-1 cursor-pointer">
                <Link href={`/posts/${post.id}/edit`}>
                  <FaRegEdit className="cursor-pointer" size={24} />
                </Link>
              </td>
              <td className="p-2 border border-1 cursor-pointer">
                <AiFillDelete
                  className="cursor-pointer"
                  size={24}
                  onClick={() =>
                    deletePost({
                      variables: { deletePostId: post.id },
                    })
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

AdminPosts.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <AdminSidebar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};

export default AdminPosts;
