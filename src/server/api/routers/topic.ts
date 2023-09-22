import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const topicRouter = createTRPCRouter({
  list: createTRPCRouter({
    shallow: publicProcedure.query(async ({ ctx }) => {
      try {
        return ctx.prisma.thematiques.findMany({ select: { nom: true } });
      } catch (error) {
        console.log({ error });
        throw new TRPCError({
          message: "❌ ON DISTRIC:LIST:SHALLOW",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
  }),
});
