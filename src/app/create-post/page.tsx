"use client";

import { useCreatePostMutation } from "@/graphql/hooks/hooks";
import { useActionState } from "react";
import styles from "./CreatePostPage.module.scss";

const CreatePostPage = () => {
  const [createPost, { data, loading, error }] = useCreatePostMutation();

  const [_, formAction, isPending] = useActionState<
    { title: string; body: string },
    FormData
  >(
    async (prevState, formData) => {
      try {
        const title = formData.get("title") as string;
        const body = formData.get("body") as string;

        await createPost({
          variables: { input: { title, body } },
        });

        return { title, body };
      } catch (err) {
        console.error("❌ Create post failed:", err);
        return prevState;
      }
    },
    { title: "", body: "" }
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Post</h1>

      <form action={formAction} className={styles.form}>
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
          ✅ Post created! ID: {data.createPost.id}
        </p>
      )}
    </div>
  );
};

export default CreatePostPage;
