/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 12:24
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 12:25
 * @desc       : 排行榜
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Rank: FC<Props> = memo(() => {
  return (
    <>
      <div>Rank</div>
    </>
  );
});

export default Rank;
