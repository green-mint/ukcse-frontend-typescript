import { useRouter } from "next/router";
import React from "react";
import { CategoriesSideBar, MainLayout } from "../../components/layouts";
import { PostsGrid } from "../../components/post";

const Posts = () => {

  const router = useRouter();
  const { category } = router.query;

  return <PostsGrid category={category} />;
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
