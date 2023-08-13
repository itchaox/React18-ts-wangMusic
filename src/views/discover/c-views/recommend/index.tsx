/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 12:23
 * @LastAuthor : itchaox
 * @LastTime   : 2023-08-12 16:59
 * @desc       : 推荐
 */
import { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';

import HotRecommend from './c-cpns/HotRecommend';
import TopCarousel from './c-cpns/TopCarousel';

import { useAppDispatch } from '@/store/hook';
import { getBannerListAction } from '@/store/modules/recommend';

interface Props {
  children?: ReactNode;
}

const Recommend: FC<Props> = memo(() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBannerListAction());
  }, []);

  return (
    <>
      <TopCarousel />
      <HotRecommend />
    </>
  );
});

export default Recommend;
