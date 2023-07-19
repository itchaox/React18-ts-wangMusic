/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-07-18 16:43
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-19 10:44
 * @desc       :
 */
import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { headerMenu } from '@/config/menu';

interface Props {
  children?: ReactNode;
}

interface MenuItem {
  name: string;
  type: string;
  url: string;
}

const AppHeader: FC<Props> = memo(() => {
  function getMenu(menuItem: MenuItem) {
    if (menuItem.type === 'path') {
      return (
        <NavLink
          to={menuItem.url}
          className={({ isActive }) =>
            isActive ? 'p-5 text-white text-base bg-stone-500' : 'p-5 text-white text-base hover:bg-stone-500'
          }
          key={menuItem.name}
        >
          {menuItem.name}
        </NavLink>
      );
    } else {
      return (
        <a
          href={menuItem.url}
          className="p-5 text-white text-base hover:bg-stone-500 "
          key={menuItem.name}
          target="_blank"
        >
          {menuItem.name}
        </a>
      );
    }
  }

  return (
    <>
      <div className="h-16 flex items-center justify-center bg-zinc-700	">
        <a className="text-rose-500 text-2xl mr-3" href="/#">
          wangMusic
        </a>
        <div>{headerMenu.map((item) => getMenu(item))}</div>
      </div>
      <div className="h-2 bg-red-500"></div>
    </>
  );
});

export default AppHeader;
