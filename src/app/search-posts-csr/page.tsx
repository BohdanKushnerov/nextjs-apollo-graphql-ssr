"use client";

import React, { useActionState } from "react";
import styles from "./SearchPosts.module.scss";
import { useGetPostSuspenseQuery } from "@/graphql/hooks/hooks";
import { skipToken } from "@apollo/client/react";

const SearchPostsCSR = () => {
  const [postId, formAction, isPending] = useActionState(
    (_: any, formData: FormData) => {
      return formData.get("id") as string | null;
    },
    null,
  );

  const { data } = useGetPostSuspenseQuery(
    postId
      ? {
          variables: { id: postId },
          fetchPolicy: "cache-first",
          queryKey: `postID key: ${postId}`,
        }
      : skipToken,
  );

  return (
    <main className={styles.main}>
      <form className={styles.form} action={formAction}>
        <input type="text" name="id" placeholder="Post ID" required />
        <button type="submit" disabled={isPending}>
          Find Post
        </button>
      </form>

      {!postId && <p>Current state is null</p>}

      {data?.post && (
        <div className={styles.result}>
          <h1>We found the post:</h1>
          <p>ID: {data.post.id}</p>
          <p>Title: {data.post.title}</p>
          <p>Body: {data.post.body}</p>
        </div>
      )}
    </main>
  );
};

export default SearchPostsCSR;
