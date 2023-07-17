/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-17 22:46
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-17 22:51
 * @desc       :
 */

let BASE_URL = '';
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://123.207.32.32:5000';
} else {
  // 开发环境
  BASE_URL = 'http://codercba.com:9002';
}

const TIME_OUT = 10000;
export { BASE_URL, TIME_OUT };
