import Image from "next/image";
import Lottie from "lottie-react";

import animatedLogo from "./assets/animated-logo.json";

import desktopCover from "./assets/covers/desktop.jpg";
import { useSyncExternalStore } from "react";

function usePreferReduceMotion(): boolean {
  function getServerSnapshot() {
    return false;
  }
  function getSnapShot() {
    return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
  }

  function subscribe(callback: () => void) {
    window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .addEventListener("change", callback);
    return () => {
      window
        .matchMedia("(prefers-reduced-motion: reduce)")
        .removeEventListener("change", callback);
    };
  }

  const preferReduceMotion = useSyncExternalStore(
    subscribe,
    getSnapShot,
    getServerSnapshot
  );

  return preferReduceMotion;
}

export function Header() {
  const preferReduceMotion = usePreferReduceMotion();
  console.log({ preferReduceMotion });
  return (
    <header className="relative flex h-screen items-center justify-center">
      <Image
        className="absolute h-full w-full object-cover"
        alt="header cover"
        src={desktopCover}
      />
      <div className="flex h-[45vh] w-[40vh] flex-col justify-center">
        <Lottie
          autoPlay={!preferReduceMotion}
          loop={!preferReduceMotion}
          animationData={animatedLogo}
          width={600}
          height={600}
        />
      </div>
    </header>
  );
}
