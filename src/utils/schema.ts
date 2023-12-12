import { z } from 'zod';

export const offerSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  logos: z.enum(['PRESENT', 'CLOCK', 'MEDAL', 'PHONE', 'QUOTATION', 'LABEL', 'GLASS', 'BOX', 'CALENDAR', 'HOUSE']),
});

export type Offer = z.infer<typeof offerSchema>;
