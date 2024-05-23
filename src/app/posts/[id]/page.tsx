import { sleep } from "@/lib/utils";
import React from "react";

type PostProps = {
  params: { id: string };
};

export default async function Post({ params }: PostProps) {
  sleep(1000);
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}