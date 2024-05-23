import { z } from "zod";

export const postFormSchema = z.object({
  title: z.string().max(20),
  body: z.string().max(100),
});
