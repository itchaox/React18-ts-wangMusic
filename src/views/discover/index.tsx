/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 08:49
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-19 10:40
 * @desc       : 发现音乐
 */
import { Suspense, memo } from 'react';
import type { FC, ReactNode } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { discoverMenu } from '@/config/menu';

interface Props {
  children?: ReactNode;
}

const Discover: FC<Props> = memo(() => {
  return (
    <>
      <div className="flex justify-center items-start h-8 bg-red-500">
        {discoverMenu.map((item) => (
          <NavLink
            to={item.url}
            key={item.url}
            className={({ isActive }) =>
              isActive
                ? 'px-4 mr-4 text-white text-base bg-stone-500'
                : 'px-4 mr-4 text-white text-base hover:bg-stone-500'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <Suspense fallback="数据加载中...">
        <Outlet />
      </Suspense>
    </>
  );
});

export default Discover;
