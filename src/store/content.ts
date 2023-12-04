import { atom } from 'jotai';

import { type ContentKey } from '../constants/content';

export const CurrentContent = atom<ContentKey>('all');
