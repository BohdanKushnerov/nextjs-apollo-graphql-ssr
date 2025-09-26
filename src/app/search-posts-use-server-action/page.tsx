"use client";

import React, { useActionState } from "react";
import { searchPostRequest } from "./_services/searchPostRequest";
import FoundPost from "@/components/FoundPost/FoundPost";

const SearchPostsUseServerAction = () => {
  const [post, formAction, isPending] = useActionState(searchPostRequest, null);

  return (
    <main className="container">
      <form className="form" action={formAction}>
        <input type="text" name="id" placeholder="Post ID" required />
        <button type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Find Post"}
        </button>
      </form>

      {!post && <p>Current post is null</p>}

      {post && <FoundPost post={post} />}
    </main>
  );
};

export default SearchPostsUseServerAction;
