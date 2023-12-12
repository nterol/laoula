import { createTRPCRouter } from '~/server/api/trpc';

import { displayRouter } from './routers/display';
import { districtRouter } from './routers/district';
import { galleryRouter } from './routers/gallery';
import { topicRouter } from './routers/topic';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  districts: districtRouter,
  topics: topicRouter,
  gallery: galleryRouter,
  display: displayRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
