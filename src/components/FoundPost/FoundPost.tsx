import { GetPostQuery } from "@/graphql/__types__";
import React, { FC } from "react";
import styles from "./FoundPost.module.scss";

interface FoundPostProps {
  post: GetPostQuery['post'];
}

const FoundPost: FC<FoundPostProps> = ({ post }) => {
  return (
    <>
      {post && (
        <div className={styles.result}>
          <h1>We found the post:</h1>
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      )}
    </>
  );
};

export default FoundPost;
