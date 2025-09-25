"use client";

import React, { useActionState } from "react";
import styles from "./SearchPosts.module.scss";
import { searchPostRequest } from "./_services/searchPostRequest";

const SearchPostsSSR = () => {
  const [state, formAction, isPending] = useActionState(
    searchPostRequest,
    null,
  );

  return (
    <main className={styles.main}>
      <form className={styles.form} action={formAction}>
        <input type="text" name="id" placeholder="Post ID" required />
        <button type="submit" disabled={isPending}>
          Find Post
        </button>
      </form>

      {!state && <p>Current state is null</p>}

      {state && (
        <div className={styles.result}>
          <h1>We found the post:</h1>
          <p>ID: {state.id}</p>
          <p>Title: {state.title}</p>
          <p>Body: {state.body}</p>
        </div>
      )}
    </main>
  );
};

export default SearchPostsSSR;
