/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 15:15
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-19 21:39
 * @desc       :
 */
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';

import routes from '@/router';

function App() {
  return (
    <>
      <AppHeader />
      {/* FIXME Suspense 路由懒加载时, 等待异步操作完成期间, 进行占位处理, 提高用户体验 */}
      <Suspense fallback="Loading...">{useRoutes(routes)}</Suspense>
      <AppFooter />
    </>
  );
}

export default App;
