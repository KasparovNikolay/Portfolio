import React, { FC } from 'react';

import { Image } from '@ui/image';
import { Link } from '@ui/link';
import { SmoothList } from '@ui/smooth-list';
import { mockContacts } from '@utils/mocks';

import styles from './contactPage.module.scss';

const ContactPage: FC = () => {
  return (
    <SmoothList animated delay={200}>
      {mockContacts.map((item) => (
        <Link
          type="outer"
          href={item.link}
          key={item.link}
          className={styles.link}
        >
          <Image src={item.logo} width={32} />
          <span>{item.title}</span>
        </Link>
      ))}
    </SmoothList>
  );
};

export default ContactPage;
