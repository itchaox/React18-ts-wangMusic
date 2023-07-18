/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-07-18 14:38
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-18 14:47
 * @desc       :
 */
import { BASE_URL, TIME_OUT } from './config';
import HYRequest from './request';

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    },
  },
});

export default hyRequest;
