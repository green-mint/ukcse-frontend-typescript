import { useQuery } from "@apollo/client";
import React from "react";
import { CategoriesSideBar, MainLayout } from "../components/layouts";
import { PostLoader } from "../components/loaders";
import { PostCard } from "../components/post";
import { Grid } from "../components/ui";
import { PopularPosts } from "../lib/graphql/interfaces/PopularPosts";
import { GET_POPULAR_POSTS } from "../lib/graphql/operations";

function Popular() {
  const { loading, error, data } = useQuery<PopularPosts>(GET_POPULAR_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-10">Popular Posts</h1>
      <div className="flex flex-col max-w-3xl sm:min-w-3xl mx-auto px-5 mt-5 justify-center">
        <Grid
          isLoading={loading}
          items={data?.popularPosts}
          loader={<PostLoader />}
          renderItem={(post, index) => {
            return (
              post && (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={post.author.name}
                  category={post.category}
                  image={`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/${post.image}`}
                  date={new Date(
                    parseInt(post.publishedAt)
                  ).toLocaleDateString()}
                />
              )
            );
          }}
        />
      </div>
    </div>
  );
}

Popular.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <CategoriesSideBar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};

export default Popular;
