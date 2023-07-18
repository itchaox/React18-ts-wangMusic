/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 15:15
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-18 16:49
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
      <Suspense fallback="Loading...">{useRoutes(routes)}</Suspense>
      <AppFooter />
    </>
  );
}

export default App;
