/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-16 22:50
 * @LastAuthor : wangchao
 * @LastTime   : 2023-07-17 09:55
 * @desc       : 统一管理 redux 工具函数
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import store from './index';

type RootStore = ReturnType<typeof store.getState>;

// 组件使用 store, 处理 state 类型提示
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

// 处理 useDispatch
type Dispatch = typeof store.dispatch;
export const useAppDispatch: () => Dispatch = useDispatch;
