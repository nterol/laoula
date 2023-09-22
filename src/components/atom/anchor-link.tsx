import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type AnchorLinkProps = {
  anchor: string;
};

export function AnchorLink({ anchor }: AnchorLinkProps) {
  const [activeAnchor, setActiveAnchor] = useState(false);
  const hash = useMemo(
    () =>
      anchor
        .toLowerCase()
        .replace(" ", "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
    [anchor]
  );

  useEffect(() => {
    setActiveAnchor(location.hash.includes(hash));
  }, [hash]);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveAnchor(location.hash.includes(hash));
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.addEventListener("hashchange", handleHashChange);
  }, [hash]);

  return (
    <Link
      data-active={activeAnchor}
      href={`#${hash}`}
      className="uppercase text-legal data-[active='true']:underline data-[active='true']:underline-offset-4"
    >
      {anchor}
    </Link>
  );
}
