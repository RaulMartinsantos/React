import { z } from "zod";

const newFormSchema = z.object({
  title: z.string().trim().min(1, "Adicione um titulo").max(255),
  photosIds: z.array(z.string().uuid()).optional(),
});

export type AlbumNewFormSchema = z.infer<typeof newFormSchema>;

export default newFormSchema;
