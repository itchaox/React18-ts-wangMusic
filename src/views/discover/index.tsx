/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 08:49
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 09:55
 * @desc       : 发现音乐
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Discover: FC<Props> = memo(() => {
  return (
    <>
      <div>Discover</div>
    </>
  );
});

export default Discover;
