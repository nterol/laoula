import { PageTemplate } from "~/components/templates/PageTemplates";

export default function FourOFour() {
  return (
    <PageTemplate color="red">
      <main className="flex h-screen w-full flex-col items-center">
        <h1 className="text-[15vw] text-iello">404</h1>
        <p className="font-heading text-7xl text-white">
          Cette page n&#39;existe pas{" "}
        </p>
      </main>
    </PageTemplate>
  );
}
