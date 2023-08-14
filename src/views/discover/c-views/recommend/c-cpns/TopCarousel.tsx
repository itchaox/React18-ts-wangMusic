/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-07-19 14:22
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-19 15:02
 * @desc       :
 */
import { Carousel } from 'antd';
import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { useAppSelector } from '@/store/hook';

interface Props {
  children?: ReactNode;
}

const TopCarousel: FC<Props> = memo(() => {
  const recommendStore = useAppSelector((state) => ({
    bannerList: state.recommend.bannerList,
    hotRecommend: state.recommend.hotRecommend
  }));

  console.log(recommendStore);


  return (
    <>
      <div className="bg-red-50">
        <Carousel autoplay autoplaySpeed={8000}>
          {recommendStore.bannerList.map((item) => (
            <img src={item.imageUrl} key={item.imageUrl} className="h-80 px-96" />
          ))}
        </Carousel>
      </div>
    </>
  );
});

export default TopCarousel;
