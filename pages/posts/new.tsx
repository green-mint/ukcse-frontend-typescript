import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { MainLayout } from "../../components/layouts";
import RequireAdmin from "../../lib/auth/guards/RequireAdmin";
import {
  CreatePost,
  CreatePostVariables,
} from "../../lib/graphql/interfaces/CreatePost";
import { CREATE_POST } from "../../lib/graphql/operations";

function NewPost() {
  const router = useRouter();

  const [createPost, { loading, error, data }] = useMutation<
    CreatePost,
    CreatePostVariables
  >(CREATE_POST, {
    errorPolicy: "all",
  });

  useEffect(() => {
    createPost({
      variables: {
        input: {
          title: "Untitled",
          category: "none",
          content: "Hello World",
          publishedAt: "2022-04-10T06:54:54.757Z",
          tags: [],
          image: "public/images/unavailable.png",
        },
      },
    });
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("There was an error creating the post");
      console.log(error);
      router.push("/");
    }

    if (data?.createPost?.id) {
      router.replace(`/posts/${data.createPost.id}/edit`);
    }
  }, [loading]);

  return <div className="text-center py-5">Creating a new post...</div>;
}

NewPost.getLayout = (page: React.ReactElement) => {
  return (
    <RequireAdmin>
      <div className="lg:ml-64 relative">{page}</div>
    </RequireAdmin>
  );
};

export default NewPost;
