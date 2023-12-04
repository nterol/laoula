import deepEqual from 'fast-deep-equal';
import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export type ConsentLabel = 'oui' | 'non';

export const consentFamily = atomFamily((id: number) => atom({ id, value: 'non' as ConsentLabel }), deepEqual);
