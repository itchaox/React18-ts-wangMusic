/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 08:49
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 15:26
 * @desc       : 发现音乐
 */
import React, { Suspense, memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

const Discover: FC<Props> = memo(() => {
  return (
    <>
      <div className="flex justify-center items-center h-10 bg-red-500">
        <Link to="/discover/recommend" className="px-4 mr-4 text-white text-base bg-stone-500">
          推荐
        </Link>
        <Link to="/discover/rank" className="px-4 mr-4 text-white text-base bg-stone-500">
          排行榜
        </Link>
        <Link to="/discover/songList" className="px-4 mr-4 text-white text-base bg-stone-500">
          歌单
        </Link>
        <Link to="/discover/radio" className="px-4 mr-4 text-white text-base bg-stone-500">
          主播电台
        </Link>
        <Link to="/discover/singer" className="px-4 mr-4 text-white text-base bg-stone-500">
          歌手
        </Link>
        <Link to="/discover/newSong" className="px-4 mr-4 text-white text-base bg-stone-500">
          新碟上架
        </Link>
      </div>
      <Suspense fallback="数据加载中...">
        <Outlet />
      </Suspense>
    </>
  );
});

export default Discover;
