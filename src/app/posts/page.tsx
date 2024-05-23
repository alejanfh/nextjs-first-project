import PostList from "@/components/posts-list";
import { Suspense } from "react";

export default async function Posts() {
  return (
    <main className=" text-center pt-16 px-5">
      <h1 className=" text-4xl font-bold mb-5 md:text-5xl">All posts</h1>

      <Suspense fallback={"...loading"}>
        <PostList />
      </Suspense>
    </main>
  );
}
