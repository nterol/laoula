import { useRouter } from 'next/router';

import { contentTypes } from '~/constants/content';

export function Nav() {
  const router = useRouter();

  const currentKey = router.query?.nav ?? 'all';

  console.log({ currentKey });

  return (
    <nav>
      <div className="flex w-full flex-col items-center justify-center self-center">
        <p className="uppercase">découvrez la ville</p>
        <p className="uppercase">trouvez votre quartier, installez vous.</p>
      </div>
      <div className="my-12 flex w-full flex-row justify-center gap-12 text-[2.02rem]">
        {contentTypes.map((content) => {
          return (
            <button
              key={content.key}
              onClick={() => {
                void (async () => {
                  await router.push({ ...router, query: { ...router.query, nav: content.key } }, undefined, {
                    scroll: false,
                  });
                });
              }}
              data-active={content.key === currentKey}
              className="text-black cursor-pointer text-2xl font-bold no-underline data-[active='true']:border-b-[3px] data-[active='true']:border-b-cherry capitalize"
            >
              {content.descFR}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
