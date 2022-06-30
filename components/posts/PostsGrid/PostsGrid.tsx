import React from "react";
import PostCard, { PostCardProps } from "../PostCard/PostCard";

type Props = {
  data: PostCardProps[];
};

const PostsGrid = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:max-w-5xl xl:mx-auto">
      {data.map((post, index) => (
        <div key={index} className="grid-item">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
