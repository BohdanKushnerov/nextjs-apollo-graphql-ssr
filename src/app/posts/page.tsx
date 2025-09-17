import React from "react";
import { getClient } from "../config/api";
import {
  GetPostsQuery,
  GetPostsQueryVariables,
  PageQueryOptions,
} from "@/graphql/__types__";
import { GET_POSTS } from "@/graphql/queries/getPosts";
import { QUANTITY_POSTS } from "../constants/constants";
import styles from "./page.module.scss";
import PostsList from "./_components/PostList/PostList";

const PostsPage = async () => {
  const { data } = await getClient().query<
    GetPostsQuery,
    GetPostsQueryVariables
  >({
    query: GET_POSTS,
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: QUANTITY_POSTS,
        },
      } as PageQueryOptions,
    },
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Posts</h1>

      {data ? (
        <PostsList postsData={data?.posts?.data} />
      ) : (
        <p>Error loading posts data</p>
      )}
    </main>
  );
};

export default PostsPage;
