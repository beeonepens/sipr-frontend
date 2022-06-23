export function getInitialName(fullName: string) {
  const names = fullName.split(' ');

  const fName = names[0].substring(0, 1).toUpperCase();
  const lName = names[names.length - 1].substring(0, 1).toUpperCase();

  if (names.length > 1) return `${fName || ''}${lName || ''}`;

  return `${fName || ''}`;
}

export async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    const result = await navigator.clipboard.writeText(text);
    return result;
  }

  return document.execCommand('copy', true, text);
}
