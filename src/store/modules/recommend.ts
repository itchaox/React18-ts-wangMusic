/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 22:11
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-17 10:11
 * @desc       :
 */
import { createSlice } from '@reduxjs/toolkit';

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    number: 99,
  },
  reducers: {
    changeNumberAction(state, { payload }) {
      state.number = payload;
    },
  },
});

export const { changeNumberAction } = recommendSlice.actions;
export default recommendSlice.reducer;
