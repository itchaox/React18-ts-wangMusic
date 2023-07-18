/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 15:15
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-18 16:47
 * @desc       :
 */
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import AppHeader from './components/app-header';

import routes from '@/router';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { changeNumberAction } from '@/store/modules/recommend';

function App() {
  const recommendStore = useAppSelector((state) => ({
    number: state.recommend.number,
  }));

  const dispatch = useAppDispatch();
  const change = () => {
    dispatch(changeNumberAction(20 + Math.random() * 100));
  };

  return (
    <>
      <AppHeader />
      {/* FIXME Suspense 路由懒加载时, 等待异步操作完成期间, 进行占位处理, 提高用户体验 */}
      <Suspense fallback="Loading...">{useRoutes(routes)}</Suspense>
      <h1>{recommendStore.number + 100}</h1>
      <h2 onClick={change}>changeButton</h2>
    </>
  );
}

export default App;
