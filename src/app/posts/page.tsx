import React from "react";
import { getClient } from "../lib/client";
import {
  GetAllPostsQuery,
  GetAllPostsQueryVariables,
  PageQueryOptions,
} from "@/graphql/__types__";
import { QUANTITY_POSTS } from "../constants/constants";
import styles from "./Posts.module.scss";
import { GetAllPostsDocument } from "@/graphql/hooks/hooks";
import PostsList from "./_components/PostList/PostList";

const PostsPage = async () => {
  const { data } = await getClient().query<
    GetAllPostsQuery,
    GetAllPostsQueryVariables
  >({
    query: GetAllPostsDocument,
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
