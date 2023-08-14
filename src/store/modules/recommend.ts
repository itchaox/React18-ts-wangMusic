/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 22:11
 * @LastAuthor : wangchao
 * @LastTime   : 2023-08-09 17:09
 * @desc       :
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getBannerList, getHotRecommend } from '@/service/modules/recommend';

export const getBannerListAction = createAsyncThunk('bannerList', async (arg, { dispatch }) => {
  const res = await getBannerList();
  const data = res.banners;
  const _data = [
    {
      imageUrl: 'https://p1.music.126.net/UQDLPZWXDr79jOynV3S6Yg==/109951168746774716.jpg?imageView&quality=89',
    },

    {
      imageUrl: 'https://p1.music.126.net/JhMfFkG8OLBpchHcO0-yQQ==/109951168746725762.jpg?imageView&quality=89',
    },
    {
      imageUrl: 'https://p1.music.126.net/IXXYT8I9HYLR3BQFNUD3Zg==/109951168746767236.jpg?imageView&quality=89',
    },
    {
      imageUrl: 'https://p1.music.126.net/aMEJEWT3UvcX7mgg7jCZHA==/109951168746777380.jpg?imageView&quality=89',
    },
    {
      imageUrl: 'https://p1.music.126.net/JhMfFkG8OLBpchHcO0-yQQ==/109951168746725762.jpg?imageView&quality=89',
    },
  ];
  dispatch(changeBannerListAction(_data));
});

export const getHotRecommendAction = createAsyncThunk('hotRecommend', async (arg, { dispatch }) => {
  const res = await getHotRecommend();
  const data = res.result;
  dispatch(changeHotRecommendAction(data));
});

interface BannerList {
  bannerList: any[];
  hotRecommend: any[];
}

const initialState: BannerList = {
  bannerList: [],
  hotRecommend: [],
};

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerListAction(state, { payload }) {
      state.bannerList = payload;
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload;
    },
  },
});

export const { changeBannerListAction, changeHotRecommendAction } = recommendSlice.actions;
export default recommendSlice.reducer;
