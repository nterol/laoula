import { promises } from 'fs';
import path from 'path';

import slugify from 'slugify';
import { z } from 'zod';

import { env } from '~/env.mjs';
import { type Offer } from '~/utils/schema';

import { createTRPCRouter, publicProcedure } from '../trpc';

const limits = { district: 4, topic: 2, offer: 2 };

export const displayRouter = createTRPCRouter({
  all: publicProcedure.input(z.object({ page: z.number() })).query(async ({ ctx: { prisma }, input }) => {
    const { page } = input;
    const offsetDistrict = page * (limits.district % 6);
    const offsetTopic = page * (limits.topic % 8);
    const offsetOffer = page * (limits.offer % 6);

    const jsonDirectory = path.join(process.cwd(), 'src/constants');

    const [districts, topics, offers] = await Promise.all([
      prisma.quartiers.findMany({ select: { nom: true, modulo: true }, skip: offsetDistrict, take: limits.district }),
      prisma.thematiques.findMany({ select: { nom: true, route: true }, skip: offsetTopic, take: limits.offer }),
      promises.readFile(jsonDirectory + '/offer.json', 'utf8').then((d) => JSON.parse(d) as Offer[]),
    ]);

    const districtWithSlug = districts.map(({ modulo, nom }) => ({
      slugged: slugify(nom ?? 'no asset'),
      name: nom,
      modulo,
    }));

    const disctrictCard = districtWithSlug.map(({ slugged, name }) => {
      return {
        slug: `/quartier/${slugged}`,
        imageURL: `${env.ASSETS_BASE_URL}/district/${slugged}/header.jpg`,
        name,
      };
    });

    const districtPhotoCard = districtWithSlug.map(({ name, modulo, slugged }) => {
      const random = Math.floor(Math.random() * (modulo ?? 1));
      return {
        random,
        name,
        slug: `/quartier/${slugged}`,
        imageURL: `${env.ASSETS_BASE_URL}/district/${slugged}/photo/${random}.jpg`,
      };
    });

    const topicCard = topics.map(({ nom, route }) => {
      console.log(route);
      const slugged = slugify(nom ?? 'no asset');

      return {
        name: nom,
        slug: `/thematique/${slugged}`,
        imageURL: `${env.ASSETS_BASE_URL}/topic/${slugged}/card.jpg`,
        isOffer: true,
      };
    });

    const offerCard = offers.slice(offsetOffer, limits.offer).map(({ name }) => {});
  }),
  explore: publicProcedure.query(async () => {}),
  move: publicProcedure.query(async () => {}),
});
