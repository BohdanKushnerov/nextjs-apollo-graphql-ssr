"use client";

import React, { useActionState } from "react";
import { skipToken } from "@apollo/client/react";
import FoundPost from "../../components/FoundPost/FoundPost";
import { useGetPostSuspenseQuery } from "@/graphql/hooks/hooks";
import { GetPostQuery } from "@/graphql/__types__";

const SearchPostsCSR = () => {
  const [postId, formAction, isPending] = useActionState(
    (_: any, formData: FormData) => {
      return formData.get("id") as string | null;
    },
    null
  );

  const { data } = useGetPostSuspenseQuery(
    postId
      ? {
          variables: { id: postId },
          fetchPolicy: "cache-first",
          queryKey: `postID key: ${postId}`,
        }
      : skipToken
  ) as { data: GetPostQuery | undefined };

  return (
    <main className="container">
      <form className="form" action={formAction}>
        <input type="text" name="id" placeholder="Post ID" required />
        <button type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Find Post"}
        </button>
      </form>

      {!postId && <p>Current state is null</p>}

      {data?.post && <FoundPost post={data.post} />}
    </main>
  );
};

export default SearchPostsCSR;
