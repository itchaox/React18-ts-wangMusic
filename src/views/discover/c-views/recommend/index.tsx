/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 12:23
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-19 14:54
 * @desc       : 推荐
 */
import { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';

import TopCarousel from './c-cpns/TopCarousel';

import { useAppDispatch, useAppSelector } from '@/store/hook';
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
    </>
  );
});

export default Recommend;
