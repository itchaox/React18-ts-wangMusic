/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 08:50
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 09:55
 * @desc       : 下载
 */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Download: FC<Props> = memo(() => {
  return (
    <>
      <div>Download</div>
    </>
  );
});

export default Download;
