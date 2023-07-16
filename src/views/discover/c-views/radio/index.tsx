/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 12:27
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 12:33
 * @desc       : 主播电台
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Radio: FC<Props> = memo(() => {
  return (
    <>
      <div>Radio</div>
    </>
  );
});

export default Radio;
