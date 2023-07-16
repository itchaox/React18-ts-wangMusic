/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 08:49
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 09:56
 * @desc       : 关注
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Friend: FC<Props> = memo(() => {
  return (
    <>
      <div>Friend</div>
    </>
  );
});

export default Friend;
