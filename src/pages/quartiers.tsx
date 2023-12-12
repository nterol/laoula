import { createServerSideHelpers } from '@trpc/react-query/server';
import SuperJSON from 'superjson';

import { PageTemplate } from '~/components/templates/PageTemplates';
import { appRouter } from '~/server/api/root';
import { prisma } from '~/server/db';
import { api } from '~/utils/api';

export const getStaticProps = async () => {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, session: null },
    transformer: SuperJSON,
  });

  await helpers.districts.list.shallow.prefetch();
  return { props: { trpcState: helpers.dehydrate() } };
};

export default function QuartiersPage() {
  const { data } = api.districts.list.shallow.useQuery();

  console.log({ data });
  return <PageTemplate color="white">kikou</PageTemplate>;
}
