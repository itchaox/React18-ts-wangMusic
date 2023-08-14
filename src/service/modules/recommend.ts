/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-07-19 13:55
 * @LastAuthor : wangchao
 * @LastTime   : 2023-08-09 16:49
 * @desc       :
 */
import hyRequest from '..';

export function getBannerList() {
  return hyRequest.get({
    url: '/banner',
  });
}

export function getHotRecommend() {
  return hyRequest.get({
    url: '/personalized',
  });
}
