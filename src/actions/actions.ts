"use server";

export function createPost(formData: FormData) {
  const title = formData.get("title") as string;
}
