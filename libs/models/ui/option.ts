import { z } from 'zod';

export const OptionSchema = z.object({
  label: z.string(),
  key: z.string(),
  imgUrl: z.string().optional(),
})

export type Option = z.infer<typeof OptionSchema>;
