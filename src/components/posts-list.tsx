import Link from "next/link";

export default async function PostList() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <ul>
      {data.posts.map((post: any) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`} className="">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
