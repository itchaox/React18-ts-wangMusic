/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 08:49
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 14:49
 * @desc       : 发现音乐
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

const Discover: FC<Props> = memo(() => {
  return (
    <>
      <Outlet />
    </>
  );
});

export default Discover;
