import { type HTMLAttributes } from 'react';

export const navigation: Array<{ title: string; subtitle: string; url: string }> = [
  {
    title: 'accueil',
    subtitle: 'Nantes dans tous les sens',
    url: '/',
  },
  {
    title: 'téléportez-vous',
    subtitle: 'Explorez les quartiers de la ville',
    url: '/quartier',
  },
  {
    title: 'la ville en images',
    subtitle: 'toutes les images',
    url: '/photo',
  },
  {
    title: 'toutes nos offres',
    subtitle: 'On prend votre projet en main',
    url: '/offre',
  },
];

export const formElements: {
  name: string;
  id: string;
  label: string;
  placeholder: string;
  type?: 'email' | 'text' | 'tel' | 'password';
  autoComplete?: 'email' | 'tel';
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
}[] = [
  {
    name: 'firstname',
    id: 'my-firstname',
    label: 'Prénom',
    placeholder: 'Anna',
  },
  {
    name: 'lastname',
    id: 'my-lastname',
    label: 'nom',
    placeholder: 'Chevillon',
  },
  {
    name: 'address',
    id: 'my-address',
    label: 'Adresse',
    placeholder: '68 rue du Général Delestraint 75002 Paris',
  },
  {
    name: 'phone',
    id: 'my-phone',
    label: 'téléphone',
    placeholder: '06 XX XX XX XX',
    type: 'tel',
    inputMode: 'tel',
    autoComplete: 'tel',
  },
  {
    name: 'email',
    id: 'my-email',
    label: 'Adresse e-mail',
    placeholder: 'anna.chevillon@laposte.fr',
    type: 'email',
    autoComplete: 'email',
    inputMode: 'email',
  },
  {
    name: 'password',
    id: 'my-password',
    label: 'Mot de passe',
    placeholder: 'mon password',
    type: 'password',
    // autoComplete: 'current-password',
  },
];
