import fb from '../../assets/images/fb.png';
import git from '../../assets/images/git.png';
import linkedIn from '../../assets/images/in.png';
import inst from '../../assets/images/inst.png';
import tg from '../../assets/images/tg.png';

type Contact = {
  link: string;
  title: string;
  logo: string;
};

export const mockContacts: Contact[] = [
  {
    link: 'https://github.com/KasparovNikolay',
    title: 'Github',
    logo: git,
  },
  {
    link: 'https://www.instagram.com/nikolay_kasparov/',
    title: 'Instagram',
    logo: inst,
  },
  {
    link: 'https://www.facebook.com/KasparovNikolay',
    title: 'Facebook',
    logo: fb,
  },
  {
    link: 'https://t.me/KasparovN',
    title: 'Telegram',
    logo: tg,
  },
  {
    link: 'https://www.linkedin.com/in/nikolay-kasparov-056a9b122/',
    title: 'LinkedIn',
    logo: linkedIn,
  },
];
