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
    <div className="container">
      <h1 className="title">Create Post</h1>

      <form action={formAction} className="form">
        <input type="text" name="title" placeholder="Title" required />
        <textarea name="body" placeholder="Body" required />
        <button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create Post"}
        </button>
      </form>

      {loading && <p className="loading-text">Loading useMutation...</p>}

      {error && <p className="error-text">Error: {error.message}</p>}

      {data && (
        <p className="success-text">
          ✅ Post created! ID: {data.createPost.id}
        </p>
      )}
    </div>
  );
};

export default CreatePostPage;
