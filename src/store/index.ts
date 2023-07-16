/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 22:06
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 22:16
 * @desc       :
 */
import { configureStore } from '@reduxjs/toolkit';

import recommendReducer from './modules/recommend';

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
  },
});

export default store;
