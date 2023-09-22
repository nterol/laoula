import { createTRPCRouter, publicProcedure } from "../trpc";
import path from "path";
import { promises } from "fs";
import { env } from "~/env.mjs";

function kebabify(n: string | null) {
  return n?.toLowerCase().replaceAll(" - ", "-").replaceAll(" ", "-") ?? "";
}

export type Offer = {
  name: string;
  title: string;
  description: string;
  logos: string[];
};

export const galleryRouter = createTRPCRouter({
  get: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const jsonDirectory = path.join(process.cwd(), "src/constants");

    const [district, topics, offers] = await Promise.all([
      prisma.quartiers.findMany({ select: { nom: true } }),
      prisma.thematiques.findMany({ select: { nom: true } }),
      promises
        .readFile(jsonDirectory + "/offer.json", "utf8")
        .then((d) => JSON.parse(d) as Offer[]),
    ]);

    console.log({ district, topics, offers });
    return [
      district.map(({ nom }) => {
        const name = kebabify(nom);
        return {
          name,
          type: "district",
          slug: `${env.ASSETS_BASE_URL}/district/${name}/card.jpg`,
        };
      }),
      topics.map(({ nom }) => {
        const name = kebabify(nom);
        return {
          name,
          type: "topic",
          slug: `${env.ASSETS_BASE_URL}/topic/${name}/card.png`,
        };
      }),
      offers.map(({ name }) => ({
        name,
        type: "offer",
        slug: `${env.ASSETS_BASE_URL}/offer/${name}.png`,
      })),
    ]
      .flatMap((e) => e)
      .sort(() => 0.5 - Math.random());
  }),
});
