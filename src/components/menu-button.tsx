import Link from "next/link";
import { Cross } from "./icons/cross";

export function MenuButton({ activate = false }) {
  return (
    <div className="fixed bottom-[504px] right-[5.3px] top-[428px] z-[1] h-[8.2rem] w-[4.5rem] text-[white] hover:cursor-pointer">
      <Link href={`/${activate ? "" : "menu"}`}>
        <div
          data-active={activate}
          className="border-y-transparent data-[active='true']:border-r-white h-0 w-0 border-y-[7.3vh] border-r-[4.5rem] border-solid border-r-cherry"
        >
          <div className="ml-[1.45rem] mt-[-0.9rem] flex h-[1.26rem] w-[2.35rem] flex-row justify-center px-[0.2rem] py-[0.3rem]">
            {activate ? (
              <Cross classes="w-[2.23rem] h-[1.26rem];" />
            ) : (
              <>
                <span className="bg-white z-10 ml-1 mr-1 h-4 w-[0.11rem] rounded-lg" />
                <span className="bg-white z-10 ml-1 mr-1 h-4 w-[0.11rem] rounded-lg" />
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

/**
 * margin-right: 0.17rem 
 * margin-left: 0.17rem 
 * border-radius: 3.36rem width: 0.11rem height: 1.01rem background: #fff;

 */
