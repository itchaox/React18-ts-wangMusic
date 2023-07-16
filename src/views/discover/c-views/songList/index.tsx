/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 12:26
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 12:27
 * @desc       : 歌单
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const SongList: FC<Props> = memo(() => {
  return (
    <>
      <div>SongList</div>
    </>
  );
});

export default SongList;
