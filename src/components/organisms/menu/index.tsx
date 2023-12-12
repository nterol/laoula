import { useAtomValue } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, type FormEvent } from 'react';

import { LongArrow } from '~/components/icons/long-arrow';
import { UserEmail, UserFirstname } from '~/store/user';
import s from '~/styles/input.module.css';

import { formElements, navigation } from './static';

import MenuLogo from '@/public/assets/menu-logo.svg';

export function MenuFirstScreen() {
  return (
    <div id="navigation" className="h-screen w-full grid grid-rows-7 lg:justify-center">
      <section className="flex flex-col lg:flex-row w-full lg:w-[80vw] justify-between row-start-1 lg:row-start-2 row-span-5 lg:row-span-4 items-center py-6">
        <Image priority src={MenuLogo as string} alt="beautilful logo" className="h-full lg:min-w-[481px]" />
        <nav>
          <ul className="flex flex-col gap-3">
            {navigation.map((nav) => (
              <li key={nav.url}>
                <Link href="/" className="flex flex-col gap-1 whitespace-nowrap">
                  <span className=" text-3xl lg:text-5xl font-bold text-white">{nav.title}</span>
                  <span className="text-lg text-iello-dim ">{nav.subtitle}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="bg-white w-full lg:w-[80vw] flex justify-center items-center gap-6 p-4 row-start-7">
        <Link href="/connexion" className=" text-lg">
          Connectez-vous
        </Link>
        <hr className="h-10 bg-cherry w-1" />
        <Link href="/register" className=" text-lg">
          Inscrivez-vous
        </Link>
      </section>
    </div>
  );
}

export function TitleWithAnchorLink({ anchor, title }: { anchor: `#${string}`; title: string }) {
  return (
    <a href={anchor} className="flex flex-col items-center">
      <span className="h-12 w-6 text-cherry">
        <LongArrow />
      </span>
      <h2 className="text-xl ">{title}</h2>
    </a>
  );
}

export function MenuSecondScreen() {
  const userFirstname = useAtomValue(UserFirstname);
  const userEmail = useAtomValue(UserEmail);
  const cards = [];

  const isDayTime = useMemo(() => {
    const h = new Date().getHours();
    return h > 6 && h <= 19;
  }, []);
  return (
    <div id="menu" className="bg-owhite-dim h-screen w-full flex flex-col items-center p-8 gap-20">
      <TitleWithAnchorLink anchor="#navigation" title="Menu" />
      <h2 className="text-3xl lg:text-5xl whitespace-nowrap">
        {isDayTime ? 'Bonjour' : 'Bonsoir'}, <span className="underline">{userFirstname}</span>
      </h2>
      <p className="text-center flex flex-col">
        Vous venez de souscrire à une de nos offres !<br /> Nous allons vous contacter à cette adresse :<br />
        {userEmail}
        <a href="#my-mail" className="text-cherry underline">
          Changer mon mail
        </a>
      </p>

      <p>VOS CARTES SAUVEGARDEES</p>
      <div>
        {cards.length === 0 ? (
          <p className="flex flex-col text-center text-xs">
            Vous n&apos;avez sauvegardés aucune carte !
            <Link className="text-cherry underline" href="/quartier">
              Voir les quartiers
            </Link>
          </p>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export function MenuDashboard() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    for (const key of formData.keys()) {
      console.log(formData.get(key));
    }
  };

  return (
    <div id="dashboard" className="bg-owhite-dim h-screen w-full flex flex-col items-center p-4 gap-8">
      <TitleWithAnchorLink anchor="#menu" title="Dashboard" />
      <form onSubmit={handleSubmit} className={`flex flex-col ${s.magic_form}`}>
        {formElements.map(({ name, label, placeholder, id, ...rest }) => (
          <div key={id} className="flex flex-col gap-2 items-center">
            <label className="text-ogrey uppercase" htmlFor={name}>
              {label}
            </label>
            <input
              className={`${
                s.input_placeholder as string
              } bg-transparent text-center text-black text-4xl font-bold caret-cherry focus:outline-cherry`}
              id={id}
              name={name}
              placeholder={placeholder}
              {...rest}
            />
          </div>
        ))}
        <div className={`flex gap-3 justify-center overflow-hidden w-full mt-8 ${s.magic_section}`}>
          <button type="submit" className="p-4 rounded-full bg-cherry-light text-white flex-1">
            Valider
          </button>
          <button className="p-4 rounded-full bg-cherry-light text-white flex-1">Annuler</button>
        </div>
      </form>
    </div>
  );
}
