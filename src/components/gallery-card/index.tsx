import Image from "next/image";
import { type RouterOutputs } from "~/utils/api";

type GalleryCardProps = RouterOutputs["gallery"]["get"][0];

export function GalleryCard({ name, type, slug }: GalleryCardProps) {
  return (
    <article className="relative h-[320px] rounded-2xl bg-cherry p-0">
      <Image
        src={slug}
        alt={name}
        fill
        className="absolute"
        style={{ objectFit: "contain" }}
      />
    </article>
  );
}
