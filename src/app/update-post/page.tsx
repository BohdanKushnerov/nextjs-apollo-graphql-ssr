"use client";

import { useUpdatePostMutation } from "@/graphql/hooks/hooks";
import { useActionState } from "react";
import styles from "./UpdatePostPage.module.scss";

const UpdatePostPage = () => {
  const [updatePost, { data, loading, error }] = useUpdatePostMutation();

  const [_, formAction, isPending] = useActionState<
    { id: number | null; title: string; body: string },
    FormData
  >(
    async (prevState, formData) => {
      try {
        const idValue = formData.get("id");
        const titleValue = formData.get("title");
        const bodyValue = formData.get("body");

        const id = idValue !== null ? Number(idValue) : null;
        const title = titleValue !== null ? String(titleValue) : "";
        const body = bodyValue !== null ? String(bodyValue) : "";

        console.log(111, { id, title, body });

        await updatePost({
          variables: { id, input: { body } },
        });

        return { id, title, body }; // ✅ id теперь number | null
      } catch (err) {
        console.error("❌ Update post failed:", err);
        return prevState;
      }
    },
    { id: null, title: "", body: "" }
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Update Post</h1>

      <form action={formAction} className={styles.form}>
        <input
          type="number"
          name="id"
          placeholder="ID"
          required
          className={styles.input}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className={styles.input}
        />
        <textarea
          name="body"
          placeholder="Body"
          required
          className={styles.textarea}
        />
        <button type="submit" disabled={isPending} className={styles.button}>
          {isPending ? "Creating..." : "Create Post"}
        </button>
      </form>

      {loading && <p className={styles.error}>Loading useMutation...</p>}
      {error && <p className={styles.error}>Error: {error.message}</p>}
      {data && (
        <p className={styles.success}>
          ✅ Post updated! ID: {data.updatePost.id}
          Title: {data.updatePost.title}
          Body: {data.updatePost.body}
        </p>
      )}
    </div>
  );
};

export default UpdatePostPage;
