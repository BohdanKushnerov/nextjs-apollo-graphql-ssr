import React from "react";
import { getClient } from "../config/api";
import { GetPostsQuery } from "@/graphql/__types__";
import { GET_POSTS } from "@/graphql/queries/getPosts";
import styles from "./page.module.scss";

const PostsPage = async () => {
  const client = getClient();

  const { data } = await client.query<GetPostsQuery>({
    query: GET_POSTS,
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Posts</h1>
      <ul className={styles.postList}>
        {data?.posts?.data?.map((post) => (
          <li className={styles.post} key={post?.id}>
            <p className={styles.postTitle}>{post?.title}</p>
            <p className={styles.postBody}>{post?.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
