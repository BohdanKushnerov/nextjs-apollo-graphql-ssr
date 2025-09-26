"use client";

import { useUpdatePostMutation } from "@/graphql/hooks/hooks";
import { useActionState } from "react";

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
    <div className="container">
      <h1 className="title">Update Post</h1>

      <form action={formAction} className="form">
        <input type="number" name="id" placeholder="ID" required />
        <input type="text" name="title" placeholder="Title" required />
        <textarea name="body" placeholder="Body" required />
        <button type="submit" disabled={isPending} className="button">
          {isPending ? "Creating..." : "Update Post"}
        </button>
      </form>

      {loading && <p className="loading-text">Loading Mutation...</p>}
      {error && <p className="error-text">Error: {error.message}</p>}
      {data && (
        <p className="success-text">
          ✅ Post updated! ID: {String(data.updatePost.id)}
          <br />
          Title: {String(data.updatePost.title)}
          <br />
          Body: {data.updatePost.body}
        </p>
      )}
    </div>
  );
};

export default UpdatePostPage;
