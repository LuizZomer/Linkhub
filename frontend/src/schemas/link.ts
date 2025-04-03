import { z } from "zod";

export const LinkSchema = z.object({
  title: z.string().min(1, "Campo Obrigatório"),
  category: z.string().min(1, "Campo Obrigatório"),
  url: z.string().min(1, "Campo Obrigatório"),
});

export type TLink = z.infer<typeof LinkSchema>;
