import { ConsentCheckbox } from "../molecules/consent-checkbox";

const legalForm = [
  "Acceptez vous le dépôt et la lecture de cookie afin que nous et nos partenaires puissions analyser vos centres d'intérêts pour vous proposer des publicités personnalisées ?",
  "Acceptez vous le dépôt et la lecture de cookies afin d 'analyser votre navigation et nous permettre de mesurer l'audience de notre site internet :",
  "Acceptez vous le dépôt et/ou la lecture de cookies pour vous permettre de partager des contenus de notre site avec d'autres personnes ou de faire connaître à ces autres personnes votre consultation ou votre opinion (boutons \"J'aime\" de Facebook par exemple)",
];

export function ConsentForm() {
  const handleSubmit = () =>
    console.log("Vos choix ont bien été enregistrés lol");

  return (
    <form className="flex flex-col items-start gap-2 py-4">
      {legalForm.map((text, index) => (
        <div key={index}>
          <div>
            <p>{text}</p>
          </div>
          <div className="flex w-2/5 justify-evenly">
            <ConsentCheckbox id={index} label="oui" />
            <ConsentCheckbox id={index} label="non" />
          </div>
        </div>
      ))}
      <button
        className="mt-4 rounded-full bg-cherry px-6 py-2 text-2xl text-white"
        onClick={handleSubmit}
      >
        Valider
      </button>
    </form>
  );
}
