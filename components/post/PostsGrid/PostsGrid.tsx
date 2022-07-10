import { useQuery } from "@apollo/client";
import { take } from "cypress/types/lodash";
import { useState } from "react";
import {
  GetPosts,
  GetPostsVariables,
} from "../../../lib/graphql/interfaces/GetPosts";
import { PostOrderByFields } from "../../../lib/graphql/interfaces/globalTypes";
import { GET_POSTS } from "../../../lib/graphql/operations";
import PostLoader from "../../loaders/PostLoader/PostLoader";
import { Grid } from "../../ui";
import PostCard from "../PostCard/PostCard";

const PostsGrid = ({
  category,
}: {
  category?: string | undefined | string[];
}) => {
  const [pageNum, setPageNum] = useState(0);

  const { loading, error, data, fetchMore } = useQuery<
    GetPosts,
    GetPostsVariables
  >(GET_POSTS, {
    variables: {
      filter: { take: 5, page: 0, orderBy: PostOrderByFields.publishedAt },
    },
  });

  const loadMore = () => {
    fetchMore({
      variables: {
        filter: {
          take: 5,
          page: pageNum + 1,
          orderBy: PostOrderByFields.publishedAt,
        },
      },
    });
    setPageNum(pageNum + 1);
  };

  if (error) return <p>Error :(</p>;

  console.log(data?.posts.length);

  return (
    <div>
      <h1 className="my-8 md:my-14 xl:my-20 text-3xl md:text-5xl xl:text-6xl text-center font-bold">
        Our Posts
      </h1>
      <div className="px-5 pb-20 ">
        <Grid
          isLoading={loading}
          items={data?.posts.filter((post) =>
            category ? post?.category.toLowerCase() === category : true
          )}
          loader={<PostLoader />}
          onEndReached={loadMore}
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
