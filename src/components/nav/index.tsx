import { useAtom } from "jotai";

import { type ContentKey, contentTypes } from "~/constants/content";
import { CurrentContent } from "~/store/content";

export function Nav() {
  const [currentContent, setCurrentContent] = useAtom(CurrentContent);
  function handleClick(id: ContentKey) {
    return () => {
      setCurrentContent(id);
    };
  }
  return (
    <nav>
      <div className="flex w-full flex-col items-center justify-center self-center">
        <p className="uppercase">découvrez la ville</p>
        <p className="uppercase">trouvez votre quartier, installez vous.</p>
      </div>
      <div className="my-12 flex w-full flex-row justify-center gap-12 text-[2.02rem]">
        {contentTypes.map((content) => {
          const [t, ...itle] = content.descFR;
          return (
            <button
              key={content.key}
              onClick={handleClick(content.key)}
              data-active={content.key === currentContent}
              className="text-black cursor-pointer text-2xl font-bold no-underline data-[active='true']:border-b-[3px] data-[active='true']:border-b-cherry"
            >
              {`${t?.toUpperCase() ?? ""}${itle.join("")}`}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
