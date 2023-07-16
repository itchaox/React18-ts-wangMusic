/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 08:49
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 09:56
 * @desc       : 我的
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const My: FC<Props> = memo(() => {
  return (
    <>
      <div>My</div>
    </>
  );
});

export default My;
