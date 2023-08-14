/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-19 21:47
 * @LastAuthor : wangchao
 * @LastTime   : 2023-08-09 17:21
 * @desc       :
 */
import { AimOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { useAppSelector } from '@/store/hook';

interface Props {
  children?: ReactNode;
}

const HotRecommend: FC<Props> = memo(() => {
  const tabList = [
    {
      name: '华语',
      path: '1',
    },
    {
      name: '流行',
      path: '2',
    },
    {
      name: '摇滚',
      path: '3',
    },
    {
      name: '民谣',
      path: '4',
    },
    {
      name: '电子',
      path: '5',
    },
  ];

  const { hotRecommend } = useAppSelector((state) => ({
    hotRecommend: state.recommend.hotRecommend,
  }));

  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-1/2 mt-5">
          <div className="w-3/4">
            <div className="flex justify-between pb-1 items-center border-solid border-red-500 border-b-2">
              <div className="flex items-center">
                <AimOutlined />
                <div className="text-xl mx-3">热门推荐</div>
                {tabList.map((item) => (
                  <Button type="link" className="text-gray-500" key={item.name}>
                    {item.name}
                  </Button>
                ))}
              </div>
              <div>
                <span className="pr-1">更多</span>
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
          <div className="w-1/4">右</div>
        </div>

        {hotRecommend.map((item, index) => (
          <div key={index}>{index}</div>
        ))}
      </div>
    </>
  );
});

export default HotRecommend;
