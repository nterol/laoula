import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InfoIcon from "./assets/info.png";
import CrossIcon from "./assets/cross.png";

export function Legal() {
  const [show, setShow] = useState(false);

  function handleChange() {
    setShow((p) => !p);
  }

  return (
    <div >
      {show ? (
        <div className="bg-white fixed bottom-2.5 right-[0.5%] z-[1] m-auto flex h-[45px] w-[30%] items-center justify-center rounded-md">
          <div className="flex w-[82%] justify-center pl-[15px]">
            <Link href="/legal#cookie">
              <span className="cursor-pointer text-[1.01rem] tracking-[0.5px] text-[#413d3d]">
                Cookies
              </span>
            </Link>

            <span className="mx-[3%] w-px bg-[#333]" />
            <Link href="/legal#mentions">
              <span className="cursor-pointer text-[1.01rem] tracking-[0.5px] text-[#413d3d]">
                Mentions légales
              </span>
            </Link>
            <span className="mx-[3%] w-px bg-[#333]" />
            <span className="cursor-pointer text-[1.01rem] tracking-[0.5px] text-[#413d3d]">
              Conditions générales
            </span>
          </div>
          <button onClick={handleChange}>
            <Image className="w-6 cursor-pointer" src={CrossIcon} alt="cross" />
          </button>
        </div>
      ) : (
        <button
          className="bg-white hover:cursor-pointer fixed bottom-5 right-[1.5%] h-[25px] w-[25px] rounded-[20px] flex justify-center items-center"
          onClick={handleChange}
        >
          <Image
            src={InfoIcon}
            alt="informations"
            className="m-auto z-[2] mt-[21%] h-3.5 "
          />
        </button>
      )}
    </div>
  );
}
