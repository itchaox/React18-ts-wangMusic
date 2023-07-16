/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 12:33
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 12:33
 * @desc       : 新歌
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const NewSong: FC<Props> = memo(() => {
  return (
    <>
      <div>NewSong</div>
    </>
  );
});

export default NewSong;
