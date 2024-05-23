import { createPost } from "@/actions/actions";
import React from "react";
import { useFormStatus } from "react-dom";

export default function CreatePost() {
  // useFormStatus for pending state
  // useFormState for error state
  // useOptimistic for optimisticUI
  // useActionState for pending and error state (no stable)

  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>

      <form action={createPost} className="h-10 space-x-2 mt-10 ">
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          className="border rounded px-3 h-full"
          required
        />

        <button className="h-full bg-blue-500 px-5 rounded text-white">
          Submit
        </button>
      </form>
    </main>
  );
}
