/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 23:57
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 00:10
 * @desc       :
 */
import { RouteObject } from 'react-router-dom';

import WangTest from '@/views/WangTest';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <div>main.ts</div>,
  },
  {
    path: '/w',
    element: <WangTest />,
  },
];

export default routes;
