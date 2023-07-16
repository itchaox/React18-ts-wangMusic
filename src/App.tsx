/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 15:15
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 15:13
 * @desc       :
 */
import { Suspense } from 'react';
import { Link, useRoutes } from 'react-router-dom';

import routes from './router';

function App() {
  return (
    <>
      {/* 顶部导航 */}
      <div className="h-16 flex items-center justify-center bg-zinc-700	">
        <Link to="/discover" className="px-6 text-white text-base">
          发现音乐
        </Link>
        <Link to="/my" className="px-6 text-white text-base">
          我的音乐
        </Link>
        <Link to="/follow" className="px-6 text-white text-base">
          关注
        </Link>
        <Link to="/download" className="px-6 text-white text-base">
          下载客户端
        </Link>
      </div>
      {/* FIXME Suspense 路由懒加载时, 等待异步操作完成期间, 进行占位处理, 提高用户体验 */}
      <Suspense fallback="Loading...">{useRoutes(routes)}</Suspense>
    </>
  );
}

export default App;
