/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 23:57
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 10:03
 * @desc       :
 */
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import Discover from '@/views/discover';
import Download from '@/views/download';
import Friend from '@/views/friend';
import My from '@/views/my';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/my" />,
  },
  {
    path: '/discover',
    element: <Discover />,
  },
  {
    path: '/my',
    element: <My />,
  },
  {
    path: '/friend',
    element: <Friend />,
  },
  {
    path: '/download',
    element: <Download />,
  },
];

export default routes;
