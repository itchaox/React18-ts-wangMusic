/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 22:11
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 22:20
 * @desc       :
 */
import { createSlice } from '@reduxjs/toolkit';

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    number: 99,
  },
  reducers: {},
});

export default recommendSlice.reducer;
