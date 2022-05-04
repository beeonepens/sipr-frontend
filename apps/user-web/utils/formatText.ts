export function getInitialName(fullName: string) {
  const names = fullName.split(' ');

  const fName = names[0].substring(0, 1).toUpperCase();
  const lName = names[names.length - 1].substring(0, 1).toUpperCase();

  if (names.length > 1) return `${fName || ''}${lName || ''}`;

  return `${fName || ''}`;
}
