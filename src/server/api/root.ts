import { createTRPCRouter } from "~/server/api/trpc";
import { districtRouter } from "./routers/district";
import { topicRouter } from "./routers/topic";
import { galleryRouter } from "./routers/gallery";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  districts: districtRouter,
  topics: topicRouter,
  gallery: galleryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
