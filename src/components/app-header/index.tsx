/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-07-18 16:43
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-18 17:07
 * @desc       :
 */
import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
        <NavLink to={menuItem.url} className="px-6 text-white text-base" key={menuItem.name}>
          {menuItem.name}
        </NavLink>
      );
    } else {
      return (
        <a href={menuItem.url} className="px-6 text-white text-base" key={menuItem.name} target="_blank">
          {menuItem.name}
        </a>
      );
    }
  }

  return (
    <>
      <div className="h-16 flex items-center justify-center bg-zinc-700	">{headerMenu.map((item) => getMenu(item))}</div>
    </>
  );
});

export default AppHeader;
