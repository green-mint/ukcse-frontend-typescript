import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import React, { useEffect } from "react";
import { MainLayout } from "../../../components/layouts";
import { PostEditor } from "../../../components/post";
import { GET_POST_WITH_CATEGORIES, UPDATE_POST } from "../../../lib/graphql/operations";
import {
  PostsWithCategories,
  PostsWithCategoriesVariables,
} from "../../../lib/graphql/interfaces/PostsWithCategories";
import { useRouter } from "next/router";
import { UpdatePosts, UpdatePostsVariables } from "../../../lib/graphql/interfaces/UpdatePosts";
import { PostValues } from "../../../components/post/PostEditor/PostEditor";
import { toast } from "react-toastify";

type Props = {};

const EditPost = (props: Props) => {
  const { postId } = useRouter().query;

  const { loading, error, data } = useQuery<
    PostsWithCategories,
    PostsWithCategoriesVariables
  >(GET_POST_WITH_CATEGORIES, {
    variables: {
      postId,
    },
    fetchPolicy: "no-cache",
  });

  const [
    updatePost,
    { loading: updateLoading, error: updateError, data: updateData },
  ] = useMutation<UpdatePosts, UpdatePostsVariables>(UPDATE_POST, { errorPolicy: "all" });

  useEffect(() => {
    if (updateError) toast.error("Problem updating post");
    if (updateData && !loading)
      toast.success("The post was updated successfully");
  }, [updateData]);

  const updateHandler = (values: PostValues) => {
    updatePost({
      variables: {
        updatePostId: postId,
        input: {
          title: values.title,
          content: values.content,
          category: values.category,
          image: values.thumbnail,
          tags: values.tags,
          publishedAt: values.date,
        }
      },
    });
  }



  if (loading) <div>Loading...</div>;
  if (error) <div>Error!</div>;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/quill-editor.css" />
      </Head>
      {data && data.post && (
        <div className="mb-10">
          <PostEditor
            defaultValues={{
              category: data.post.category,
              content: data.post.content,
              tags: data.post.tags,
              thumbnail: data.post.image,
              title: data.post.title,
              date: new Date(parseInt(data.post.publishedAt))
                .toISOString()
                .split("T")[0],
            }}
            categories={data.categories}
            onSubmit={updateHandler}
          />
        </div>
      )}
    </>
  );
};

EditPost.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default EditPost;
