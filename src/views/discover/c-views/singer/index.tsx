/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 12:31
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 12:32
 * @desc       : 歌手
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Singer: FC<Props> = memo(() => {
  return (
    <>
      <div>Singer</div>
    </>
  );
});

export default Singer;
