"use server";

import prisma from "@/lib/db";
import { postFormSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";

// TODO: Add zod
export async function createPost(prevState: unknown, postFormData: unknown) {
  // // auth check para que alguien de fuera intente hacer otro post
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login");
  // }

  // check if formData is a FormData type
  if (!(postFormData instanceof FormData)) {
    return {
      message: "Invalid form data.",
    };
  }

  // convert formData to a plain object
  const postFormDataEntries = Object.fromEntries(postFormData.entries());

  // validate data
  const validatedPost = postFormSchema.safeParse(postFormDataEntries);

  if (!validatedPost.success) {
    return {
      message: "Invalid post data",
    };
  }

  // update database
  try {
    await prisma.post.create({
      data: {
        title: validatedPost.data.title,
        body: validatedPost.data.body,
      },
    });
  } catch (error) {
    return {
      message: "There was an error creating a post",
    };
  }

  // revalidate para no tener que hacer control + R
  revalidatePath("/posts");
}
