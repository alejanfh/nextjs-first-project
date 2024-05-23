"use client";
import { createPost } from "@/actions/actions";
import React from "react";
import { useFormState } from "react-dom";

export default function Form() {
  // useFormStatus for pending state
  // useFormState for error state
  // useOptimistic for optimisticUI
  // useActionState for pending and error state (no stable)

  const [postError, dispatchPost] = useFormState(createPost, undefined);

  return (
    <form
      action={dispatchPost}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
    >
      <input
        type="text"
        name="title"
        placeholder="Title for new post"
        className="border rounded px-3 h-10"
        required
      />
      <textarea
        name="body"
        placeholder="Body content for new post"
        className="border rounded px-3 py-2"
        rows={6}
        required
      />
      <button className="h-10 bg-blue-500 px-5 rounded text-white">
        Submit
      </button>

      {postError && (
        <p className="text-red-500 text-sm mt-2">{postError.message}</p>
      )}
    </form>
  );
}
