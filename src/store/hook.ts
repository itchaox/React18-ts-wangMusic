/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 22:50
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 22:53
 * @desc       : 组件使用 store, 处理 state 类型提示
 */
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import store from './index';

type RootStore = ReturnType<typeof store.getState>;

const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export default useAppSelector;
