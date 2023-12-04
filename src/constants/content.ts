export const contentTypes = [
  { key: 'all', descFR: 'tout' },
  { key: 'explore', descFR: 'explorer' },
  { key: 'move', descFR: 'déménager' },
] as const;

export type ContentKey = (typeof contentTypes)[number]['key'];
