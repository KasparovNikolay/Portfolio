import css from '../../../assets/images/css.png';
import git from '../../../assets/images/git.png';
import html from '../../../assets/images/html.png';
import js from '../../../assets/images/js.png';
import mongo from '../../../assets/images/mongodb.png';
import node from '../../../assets/images/nodejs.png';
import pwa from '../../../assets/images/pwa.png';
import react from '../../../assets/images/react.png';
import redux from '../../../assets/images/redux.png';
import ts from '../../../assets/images/ts.png';

export const mockTechnologies = [
  { title: 'React', imgUrl: react },
  { title: 'Redux', imgUrl: redux },
  { title: 'Git', imgUrl: git },
  { title: 'NodeJS', imgUrl: node },
  { title: 'JavaScript', imgUrl: js },
  { title: 'PWA', imgUrl: pwa },
  { title: 'MongoDB', imgUrl: mongo },
  { title: 'CSS', imgUrl: css },
  { title: 'HTML', imgUrl: html },
  { title: 'Typescript', imgUrl: ts },
];

// name in lower case only
export const getTechByNames = (names: string[]) => {
  return mockTechnologies.filter(({ title }) =>
    names.includes(title.toLowerCase())
  );
};
