import React, {
  FC,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useTransition } from '@utils/hooks';
import { getNavbar } from '@utils/mocks';
import { useLocation } from 'react-router-dom';

import { Link } from '../link';

import styles from './navbar.module.scss';

type NavbarStateType = { width: string; height: string; left: string };

const Navbar: FC = () => {
  const lang = 'en';

  const navbarList = useMemo(() => getNavbar(), []);
  const container = useRef(null);
  const [state, setState] = useState<NavbarStateType[]>([]);
  const { style } = useTransition();
  const [pos, setPos] = useState<number | null>(null);
  const { pathname } = useLocation();

  // TODO: fix use effects

  useEffect(() => {
    if (pathname === '/') {
      return setPos(0);
    }
    const activeLinkIndex = navbarList.findIndex(
      (item) => item.en === pathname.replace('/', '')
    );

    setPos(activeLinkIndex);
  }, []);

  useLayoutEffect(() => {
    if (container.current) {
      const chidren = Array.from(
        (container.current as unknown as HTMLElement).childNodes
      );
      const result = chidren.map((i) => {
        const item = i as HTMLElement;
        const { width, height } = item.getBoundingClientRect();
        const left = item.offsetLeft;
        return {
          width: width + 'px',
          height: height + 'px',
          left: left + 'px',
        };
      });
      setState(result);
    }
  }, []);

  return (
    <nav className={styles.navbar} ref={container} style={style}>
      {navbarList.map((item, index) => (
        <Link
          onClick={() => setPos(index)}
          className={styles.navbar_link}
          href={item['en'] === 'home' ? '/' : '/' + item['en']}
          key={item['en']}
        >
          {item[lang]}
        </Link>
      ))}
      {pos !== null && (
        <div className={styles.animatedActive} style={state[pos]}></div>
      )}
    </nav>
  );
};

export default Navbar;
