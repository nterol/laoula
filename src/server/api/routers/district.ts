import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const districtRouter = createTRPCRouter({
  list: createTRPCRouter({
    shallow: publicProcedure.query(async ({ ctx }) => {
      try {
        const data = await ctx.prisma.quartiers.findMany({
          select: { nom: true, id_quartier: true, modulo: true },
        });
        return data.map(({ nom, ...rest }) => ({
          name: nom?.toLowerCase().replaceAll(" - ", "-").replaceAll(" ", "-"),
          ...rest,
        }));
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
