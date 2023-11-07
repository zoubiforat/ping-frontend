import { z } from 'zod';

export const postExecuterSchema = z.object({
  host: z.string(),//.url(),
  count: z.array(z.number().positive()),
});

export type PostExecuterSchema = z.infer<typeof postExecuterSchema>;
