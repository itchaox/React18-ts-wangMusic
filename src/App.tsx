/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 15:15
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 14:40
 * @desc       :
 */
import { Suspense } from 'react';
import { Link, useRoutes } from 'react-router-dom';

import routes from './router';

function App() {
  return (
    <>
      {/* 顶部导航 */}
      <div>
        <Link to="/discover">发现音乐</Link>
        <Link to="/my">我的音乐</Link>
        <Link to="/follow">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      {/* FIXME Suspense 路由懒加载时, 等待异步操作完成期间, 进行占位处理, 提高用户体验 */}
      <Suspense fallback="Loading...">{useRoutes(routes)}</Suspense>
    </>
  );
}

export default App;
