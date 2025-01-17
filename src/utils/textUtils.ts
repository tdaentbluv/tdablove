export const escapeApostrophe = (text: string): string => {
  return text.replace(/'/g, '&apos;');
};
