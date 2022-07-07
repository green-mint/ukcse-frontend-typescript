// import { useQuery } from "@apollo/client";
// import React, { useEffect, useState } from "react";
// import {
//   GetPosts,
//   GetPostsVariables,
//   GetPosts_posts,
// } from "../lib/graphql/interfaces/GetPosts";
// import { PostOrderByFields } from "../lib/graphql/interfaces/globalTypes";
// import { GET_POSTS } from "../lib/graphql/operations";

// type Props = {
//   pageNum: number;
// };

// const usePosts = ({ pageNum }: Props) => {
//   const [posts, setPosts] = useState<GetPosts_posts[] | null>(null);

//   const { loading, error, data, fetchMore } = useQuery<
//     GetPosts,
//     GetPostsVariables
//   >(GET_POSTS, {
//     variables: {
//       filter: { take: 12, page: 1, orderBy: PostOrderByFields.publishedAt },
//     },
//   });

//   useEffect(() => {
//     if (loading)
//   }, [pageNum, loading]);
// };

// export default usePosts;
