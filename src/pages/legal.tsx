import { AnchorLink } from "~/components/atom/anchor-link";
import { ConsentForm } from "~/components/organisms/consent-form";
import { PageTemplate } from "~/components/templates/PageTemplates";

export default function LegalPage() {
  return (
    <PageTemplate color="grey">
      <main className="mx-auto grid w-fit grid-cols-6 justify-items-center gap-x-8 gap-y-16 py-6 text-legal lg:max-w-[65vw] lg:grid-cols-3">
        <h1 className="col-start-2 col-end-6 text-3xl text-legal lg:col-span-3">
          Informations générales
        </h1>
        <aside className="col-start-2 col-end-6 flex gap-4 lg:col-span-1 lg:flex-col">
          <AnchorLink anchor="cookies" />
          <AnchorLink anchor="Mentions légales" />
        </aside>
        <section className="col-start-2 col-end-6 flex flex-col gap-2 lg:col-span-2">
          <h2 id="cookies" className="font-circular text-2xl uppercase">
            Cookies
          </h2>
          <p>
            Lorsque vous naviguez sur notre site internet, des informations sont
            suceptibles d&apos;être enregistrées, ou lues, dans votre terminal,
            sous réserve de votre choix.
          </p>
          <ConsentForm />
          <h2
            id="mentions-legales"
            className="font-circular text-2xl uppercase"
          >
            Mentions Légales
          </h2>
          <p>
            Editeur: La Poste
            <br />
            <br />
            SA au capital de 3 800 000 000 euros, 356 000 000 RCS Paris, Siège
            social: 9 rue du Colonel Pierre Avia -
            <br />
            75015 PARIS, Tél: 01 55 44 00 00
            <br />
            <br />
            Directeur de la publication: Blandine Charveriat Louis
            <br /> <br />
            Hébergeur: Amazon Web Service en Irlande
          </p>
        </section>
      </main>
    </PageTemplate>
  );
}
