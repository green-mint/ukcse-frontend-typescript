import { useQuery } from "@apollo/client";
import React from "react";
import { CategoriesSideBar, MainLayout } from "../../components/layouts";
import { PostsGrid } from "../../components/post";

const Posts = () => {
  return <PostsGrid />;
};

Posts.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <CategoriesSideBar />
      <div className="lg:ml-64 relative">{page}</div>
    </MainLayout>
  );
};

export default Posts;
