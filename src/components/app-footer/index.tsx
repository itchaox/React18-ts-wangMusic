import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const AppFooter: FC<Props> = memo(() => {
  return (
    <>
      <div>AppFooter</div>
    </>
  );
});

export default AppFooter;
