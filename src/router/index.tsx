/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 23:57
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 14:04
 * @desc       :
 */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Discover = lazy(() => import('@/views/discover'));
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'));
const Rank = lazy(() => import('@/views/discover/c-views/rank'));
const SongList = lazy(() => import('@/views/discover/c-views/songList'));
const Radio = lazy(() => import('@/views/discover/c-views/radio'));
const Singer = lazy(() => import('@/views/discover/c-views/singer'));
const NewSong = lazy(() => import('@/views/discover/c-views/newSong'));

const Download = lazy(() => import('@/views/download'));
const Follow = lazy(() => import('@/views/follow'));
const My = lazy(() => import('@/views/my'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/rank',
        element: <Rank />,
      },
      {
        path: '/discover/songList',
        element: <SongList />,
      },
      {
        path: '/discover/radio',
        element: <Radio />,
      },
      {
        path: '/discover/singer',
        element: <Singer />,
      },
      {
        path: '/discover/newSong',
        element: <NewSong />,
      },
    ],
  },
  {
    path: '/my',
    element: <My />,
  },
  {
    path: '/follow',
    element: <Follow />,
  },
  {
    path: '/download',
    element: <Download />,
  },
];

export default routes;
