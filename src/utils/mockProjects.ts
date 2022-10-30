import { getTechByNames } from './mockTechnologies';

type ResponsibilityType = {
  text: string;
};
type TechnologyType = {
  title: string;
  imgUrl: string;
};

type ProjectType = {
  title: string;
  url: string | null;
  description: string;
  technologies: TechnologyType[];
};

type ExpirienceType = {
  companyName: string;
  companyUrl: string | null;
  companyLogo: string;
  description: string;
  timeStart: string;
  timeEnd: string | null;
  responsibilities: ResponsibilityType[];
  technologies: TechnologyType[];
  projects: ProjectType[];
  position: string | null;
};

export const mockProjects: ExpirienceType[] = [
  {
    companyName: 'Blaze',
    companyUrl: 'blaze.su',
    companyLogo: 'https://blaze.su/logo.svg',
    timeStart: '01.05.2018',
    timeEnd: '01.10.2019',
    responsibilities: [
      { text: 'Разработка и поддержка существующих проектов' },
      { text: 'Верстка и поддержка новых проектов' },
      { text: 'Перенос разметки на Битрикс-1С' },
      { text: 'Создание UI-kita' },
      { text: 'Организация работы в команде' },
      { text: 'Проеведение собеседований' },
      { text: 'верстка страниц с помощью Pug,Scss, Gulp' },
      { text: 'развертывание ядра битрикс' },
      { text: 'перенос верстки на 1С-Битрикс' },
      { text: 'доработка и настройка 1С-Битрикс' },
      { text: 'разработка основных компонентов сайта' },
      { text: 'работа с хранилищем (Redux, Redux-thunk)' },
      { text: 'работа с REST Api' },
    ],
    technologies: getTechByNames([
      'html',
      'css',
      'git',
      'js',
      'react',
      'redux',
      'css',
      'typescript',
    ]),
    projects: [
      {
        title: 'МСК',
        url: null,
        description: '',
        technologies: getTechByNames(['html', 'css']),
      },
      {
        title: 'Alma-med',
        url: null,
        description: '',
        technologies: getTechByNames([
          'git',
          'js',
          'react',
          'redux',
          'css',
          'typescript',
        ]),
      },
      {
        title: 'Blaze.su',
        url: null,
        description: '',
        technologies: getTechByNames(['html', 'css', 'git', 'js']),
      },
    ],
    position: 'junior-developer',
    description: 'Студия перфоманс маркетинга',
  },
  {
    companyName: 'RBLab',
    companyUrl: 'blaze.su',
    companyLogo:
      'https://bookmaker-ratings.ru/wp-content/themes/bmr/redesign/dist/images/ru/logo/logo-with-text-for-light.svg?v=30102359',
    timeStart: '01.11.2019',
    timeEnd: '01.04.2022',
    responsibilities: [],
    technologies: [],
    projects: [
      {
        title: 'Рейтинг Букмекеров',
        url: null,
        description: '',
        technologies: getTechByNames([
          'git',
          'js',
          'react',
          'redux',
          'css',
          'typescript',
        ]),
      },
      {
        title: 'Метамувис',
        url: null,
        description: '',
        technologies: getTechByNames([
          'git',
          'js',
          'react',
          'redux',
          'css',
          'typescript',
        ]),
      },
    ],
    position: '',
    description: '',
  },
  {
    companyName: 'Медиалогия',
    companyUrl: 'blaze.su',
    companyLogo:
      'https://1020545.ssl.1c-bitrix-cdn.ru/assets/images/mlg_logo_new2.svg',
    timeStart: '01.04.2020',
    timeEnd: '01.10.2022',
    responsibilities: [
      { text: 'согласование дизайна и формирование UI-кита' },
      { text: 'разработка библиотеки компонентов' },
      {
        text: 'работа над архитектурой приложения и средствами оптимизации кода',
      },
      { text: 'организация взаимодействия с бэкендом RestAPI' },
      { text: 'организация командной работы в TFS' },
      {
        text: 'интеграция новых сотрудников в проект и кодревью, а также работа над документацией проекта',
      },
    ],
    technologies: getTechByNames([
      'git',
      'js',
      'react',
      'redux',
      'css',
      'typescript',
      'pwa',
    ]),
    projects: [
      {
        title: 'Медиалогия - соцмедия',
        url: null,
        description: '',
        technologies: getTechByNames([
          'git',
          'js',
          'react',
          'redux',
          'css',
          'typescript',
          'pwa',
        ]),
      },
      {
        title: 'Дэшбород',
        url: null,
        description: '',
        technologies: getTechByNames([
          'git',
          'js',
          'react',
          'redux',
          'css',
          'typescript',
          'pwa',
        ]),
      },
    ],
    position: '',
    description:
      'Сбор и визуализация аналитики по все доступным социальным медия ресурсам',
  },
  {
    companyName: 'Redlab',
    companyUrl: 'https://redlab.dev/',
    companyLogo:
      'https://redlab.dev/wp-content/themes/redlab/images/inhtml/logo.svg',
    timeStart: '01.04.2020',
    timeEnd: '01.10.2022',
    responsibilities: [],
    technologies: [],
    projects: [
      {
        title: 'Alfabank',
        url: null,
        description: '',
        technologies: getTechByNames([
          'git',
          'js',
          'react',
          'redux',
          'css',
          'typescript',
        ]),
      },
    ],
    position: 'middle-developer',
    description:
      'RedLab — глобальная ИТ-компания, которая занимается созданием ПО и формированием выделенных команд разработки. Redlab входит в ГК Litota Group c 2019 года и объединяем лучших экспертов со всего мира',
  },
];
