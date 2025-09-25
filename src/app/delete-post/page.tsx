"use client";

import { useDeletePostMutation } from "@/graphql/hooks/hooks";
import { useActionState } from "react";
import styles from "./DeletePostPage.module.scss";

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
    { id: null },
  );

  return (
    <div className="container">
      <h1 className="title">Update Post</h1>

      <form action={formAction} className={styles.form}>
        <input
          type="number"
          name="id"
          placeholder="ID"
          required
          className={styles.input}
        />
        <button type="submit" disabled={isPending} className={styles.button}>
          {isPending ? "Deleting..." : "Delete Post"}
        </button>
      </form>

      {loading && <p className={styles.error}>Loading useMutation...</p>}
      {error && <p className={styles.error}>Error: {error.message}</p>}
      {data && (
        <p className={styles.success}>
          ✅ Post deleted! : {String(data.deletePost)}
        </p>
      )}
    </div>
  );
};

export default DeletePostPage;
