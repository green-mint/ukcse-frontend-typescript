import Image from "next/image";
import Link from "next/link";
import React from "react";
import client from "../../../lib/graphql";
import { GetPost } from "../../../lib/graphql/interfaces/GetPost";
import { GetPosts } from "../../../lib/graphql/interfaces/GetPosts";
import { GET_POST, GET_POSTS, GET_POSTS_BY_CATEGORY } from "../../../lib/graphql/operations";
import dynamic from "next/dynamic";
import Head from "next/head";
import { MainLayout } from "../../../components/layouts";
import { PostsSlider } from "../../../components/post";
import { useQuery } from "@apollo/client";
import {
  GetPostsByCategory,
  GetPostsByCategoryVariables,
} from "../../../lib/graphql/interfaces/GetPostsByCategory";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type Props = {
  post: GetPost["post"];
};

const PostViewer = ({ post }: Props) => {
  const { loading, error, data } = useQuery<
    GetPostsByCategory,
    GetPostsByCategoryVariables
  >(GET_POSTS_BY_CATEGORY, { variables: { category: post?.category || "none" } });

  console.log(data);

  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="author" content={post?.author.name} />
        <meta name="keywords" content={post?.tags.toString()} />
        <link rel="stylesheet" href="/quill-viewer.css" />
      </Head>
      <div className="my-5 md:my-8 xl:my-16 md:max-w-4xl mx-auto md:px-6">
        <div className="px-2 sm:px-6 md:px-0">
          <Link href={`posts/${post?.category}`}>
            <h3 className="uppercase text-center font-semibold text-sm md:text-base xl:text-lg text-emerald-600">
              {post?.category}
            </h3>
          </Link>
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-1 xl:mt-2 font-bold">
            {post?.title}
          </h1>
          <div className="flex mt-1 sm:mt-1.5 xl:mt-2.5 items-end space-x-2 justify-center">
            <span className="text-xs text-slate-500 sm:text-sm">
              {post?.author.name}
            </span>
            <div className="w-1 h-1 rounded-full bg-slate-300 my-auto"></div>
            <span className="text-xs sm:text-sm xl:text-base font text-slate-500">
              {post?.publishedAt &&
                new Date(parseInt(post.publishedAt)).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="relative mt-8 overflow-hidden transition-all bg-gray-300 dark:bg-gray-800 aspect-square">
          {post?.image && (
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/${post.image}`}
              alt={post?.title}
              layout="fill"
              className=""
            />
          )}
        </div>
        <div className="mt-8 px-2 sm:px-6 md:px-0">
          <ReactQuill
            value={post?.content}
            readOnly
            modules={{ toolbar: false }}
          />
        </div>

        <div className="mt-5">
          <PostsSlider
            data={data?.postsInCategory.map((post) => ({
              title: post.title,
              image: process.env.NEXT_PUBLIC_SERVER_ENDPOINT + "/" + post.image,
              date: post.publishedAt,
              author: post.author.name,
              category: post.category,
              id: post.id,
            }))}
          />
        </div>
      </div>
    </>
  );
};

type PostStaticProps = {
  params: {
    postId: string;
  };
};

export async function getStaticProps({ params }: PostStaticProps) {
  const { data: postData, error } = await client.query<GetPost>({
    query: GET_POST,
    variables: {
      postId: params.postId,
    },
  });

  if (error) throw new Error("Error getting post" + error.message);

  return {
    props: {
      post: postData.post,
    },
  };
}

export async function getStaticPaths() {
  const { data, error } = await client.query<GetPosts>({
    query: GET_POSTS,
  });

  if (error) throw new Error("Error getting posts" + error.message);
  console.log(data);
  return {
    paths: data.posts.map((post) => ({
      params: {
        postId: post?.id,
      },
    })),
    fallback: "blocking",
  };
}

PostViewer.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default PostViewer;
