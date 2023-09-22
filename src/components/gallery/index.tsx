import s from "./masonry.module.css";

type GalleryProps = {
  children: React.ReactNode;
};

export function Gallery({ children }: GalleryProps) {
  return <section className={s.masonry_container}>{children}</section>;
}
