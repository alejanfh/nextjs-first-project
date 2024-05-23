import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostList() {
  // const response = await fetch("https://dummyjson.com/posts?limit=10");
  // const data = await response.json();

  const posts = await prisma.post.findMany();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`} className="">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
