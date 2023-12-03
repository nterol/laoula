import { type NextPage } from "next";
import Head from "next/head";

import { Gallery } from "~/components/gallery";
import { GalleryCard } from "~/components/gallery-card";
import { Header } from "~/components/header/header";
import { Legal } from "~/components/legal";
import { MenuButton } from "~/components/menu-button";
import { Nav } from "~/components/nav";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data } = api.gallery.get.useQuery();

  console.log(data);

  console.log({ data });
  return (
    <>
      <Head>
        <title>Yellow Nantes</title>
        <meta name="description" content="Yellow Nantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-full bg-gray-200 p-8">
        <Nav />
        <Gallery>
          {data?.map((card) => (
            <GalleryCard key={card.name} {...card} />
          ))}
        </Gallery>
      </main>
      <MenuButton />
      <Legal />
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
