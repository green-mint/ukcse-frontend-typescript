import { useQuery } from "@apollo/client";
import { GetPosts, GetPostsVariables } from "../../../lib/graphql/interfaces/GetPosts";
import { GET_POSTS } from "../../../lib/graphql/operations";
import { Grid } from "../../ui";
import PostCard from "../PostCard/PostCard";


const PostsGrid = () => {
  const { loading, error, data, fetchMore } = useQuery<
    GetPosts,
    GetPostsVariables
  >(GET_POSTS);

  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1 className="my-8 md:my-14 xl:my-20 text-3xl md:text-5xl xl:text-6xl text-center font-bold">Our Posts</h1>
      <div className="px-5 pb-20 ">
        <Grid
          isLoading={loading}
          items={data?.posts}
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
};

export default PostsGrid;