export const mockTechnologies = [
  { title: 'React', imgUrl: 'https://img.icons8.com/wired/344/react.png' },
  { title: 'Redux', imgUrl: 'https://img.icons8.com/ios/344/redux.png' },
  { title: 'Git', imgUrl: 'https://img.icons8.com/ios/344/git.png' },
  { title: 'NodeJS', imgUrl: 'https://img.icons8.com/windows/344/nodejs.png' },
  {
    title: 'JavaScript',
    imgUrl: 'https://img.icons8.com/ios/344/javascript--v1.png',
  },
  {
    title: 'PWA',
    imgUrl:
      'https://img.icons8.com/external-creatype-outline-colourcreatype/344/external-pwa-file-format-creatype-outline-colourcreatype.png',
  },
  {
    title: 'MongoDB',
    imgUrl:
      'https://img.icons8.com/external-tal-revivo-regular-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-regular-tal-revivo.png',
  },
  { title: 'CSS', imgUrl: 'https://img.icons8.com/ios/344/css3.png' },
  { title: 'HTML', imgUrl: 'https://img.icons8.com/ios/344/html-5--v1.png' },
  {
    title: 'Typescript',
    imgUrl: 'https://img.icons8.com/ios/344/typescript.png',
  },
];

// name in lower case only
export const getTechByNames = (names: string[]) => {
  return mockTechnologies.filter(({ title }) =>
    names.includes(title.toLowerCase())
  );
};
