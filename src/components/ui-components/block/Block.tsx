import React, { FC } from 'react';

import { Children } from '../../../utils/types';

import styles from './block.module.scss';

type BlockProps = { children?: Children };

const Block: FC<BlockProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Block;
