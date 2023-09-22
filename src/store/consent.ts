import { atomFamily } from "jotai/utils";
import { atom } from "jotai";
import deepEqual from "fast-deep-equal";

export type ConsentLabel = "oui" | "non";

export const consentFamily = atomFamily(
  (id: number) => atom({ id, value: "non" as ConsentLabel }),
  deepEqual
);
