import { type AppType } from 'next/app';
import { useRouter } from 'next/router';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { MenuButton } from '~/components/menu-button';
import { api } from '~/utils/api';

import '~/styles/globals.css';

const hasMenuButton = ['/quartier', '/menu', '/thematiques', '/'];

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const { asPath } = useRouter();

  console.log({ asPath });
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      {hasMenuButton.includes(asPath) ? <MenuButton /> : null}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
