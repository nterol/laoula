import { useAtom } from "jotai";

import { type ConsentLabel, consentFamily } from "~/store/consent";

type LegalCheckboxProps = {
  id: number;
  label: ConsentLabel;
};

export function ConsentCheckbox({ label, id }: LegalCheckboxProps) {
  const [consentValue, setConsentValue] = useAtom(consentFamily(id));

  return (
    <div className="flex items-center gap-1 p-2">
      <input
        onChange={() => {
          setConsentValue({ ...consentValue, value: label });
        }}
        checked={consentValue.value === label}
        type="radio"
        value={label}
      />
      <label htmlFor="checkbox" className="block">
        {label}
      </label>
    </div>
  );
}
