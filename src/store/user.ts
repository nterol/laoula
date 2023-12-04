import { atom } from 'jotai';

const defaultValues = { firstname: 'Bel.le iconnu.e', email: 'example.mail@example.com' };

export const UserFirstname = atom(defaultValues.firstname);

export const UserLastname = atom('');

export const UserAddress = atom('');

export const UserPhone = atom('');

export const UserEmail = atom(defaultValues.email);

export const UserPassword = atom('');
