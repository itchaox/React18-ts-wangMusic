/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 12:23
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 12:23
 * @desc       : 推荐
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Recommend: FC<Props> = memo(() => {
  return (
    <>
      <div>Recommend</div>
    </>
  );
});

export default Recommend;
