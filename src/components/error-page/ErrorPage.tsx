import React, { FC } from 'react';

import { Link } from '@ui/link';
import { StaticLayout } from '@ui/static-layout';

const ErrorPage: FC = () => {
  return (
    <StaticLayout>
      <h1>Something went wrong...</h1>
      <Link href="/">Go home</Link>
    </StaticLayout>
  );
};

export default ErrorPage;
