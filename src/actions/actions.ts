"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

// TODO: Add zod
export async function createPost(formData: FormData) {
  // // auth check para que alguien de fuera intente hacer otro post
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login");
  // }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  // update database
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  // revalidate para no tener que hacer control + R
  revalidatePath("/posts");
}
