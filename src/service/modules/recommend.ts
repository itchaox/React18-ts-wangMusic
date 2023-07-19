/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-07-19 13:55
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-19 14:02
 * @desc       :
 */
import hyRequest from '..';

export function getBannerList() {
  return hyRequest.get({
    url: '/banner',
  });
}
