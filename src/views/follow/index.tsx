/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 08:49
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 14:41
 * @desc       : 关注
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Follow: FC<Props> = memo(() => {
  return (
    <>
      <div>follow</div>
    </>
  );
});

export default Follow;
