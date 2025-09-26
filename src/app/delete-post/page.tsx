"use client";

import { useDeletePostMutation } from "@/graphql/hooks/hooks";
import { useActionState } from "react";

const DeletePostPage = () => {
  const [deletePost, { data, loading, error }] = useDeletePostMutation();

  const [_, formAction, isPending] = useActionState<
    { id: number | null },
    FormData
  >(
    async (prevState, formData) => {
      try {
        const idValue = formData.get("id");

        const id = idValue !== null ? Number(idValue) : null;

        console.log(111, { id });

        await deletePost({
          variables: { id },
        });

        return { id };
      } catch (err) {
        console.error("❌ Delete post failed:", err);
        return prevState;
      }
    },
    { id: null }
  );

  return (
    <div className="container">
      <h1 className="title">Delete Post</h1>

      <form action={formAction} className="form">
        <input
          type="number"
          name="id"
          placeholder="ID"
          required
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Deleting..." : "Delete Post"}
        </button>
      </form>

      {loading && <p className="loading-text">Loading useMutation...</p>}

      {error && <p className="error-text">Error: {error.message}</p>}
      {data && (
        <p className="success-text">
          ✅ Post deleted! : {String(data.deletePost)}
        </p>
      )}
    </div>
  );
};

export default DeletePostPage;
