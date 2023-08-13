/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-08-12 16:18
 * @LastAuthor : itchaox
 * @LastTime   : 2023-08-12 17:13
 * @desc       :
 */
import _ from 'lodash';
import { useEffect } from 'react';

export default function useScreenScale() {
  const resize = _.throttle(function () {
    triggerScale();
  }, 100);

  useEffect(() => {
    triggerScale();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  // 触发缩放适配
  function triggerScale() {
    // 1. 设计稿尺寸
    let designWidth = 1920;
    let designHeight = 1080;
    let designRatio = 16 / 9;

    // 2. 获取目标设备宽高
    let targetWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let targetHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // debugger;

    // 3. 计算缩放比例

    let scaleRatioByWidth = targetWidth / designWidth;
    let scaleRatioByHeight = targetHeight / designHeight;
    // 目标设备宽高比
    let currentRation = targetWidth / targetHeight;

    // 4.进行缩放操作
    // document.body.style.width = `width:${designWidth}px`;
    // document.body.style.height = `height:${designHeight}px`;
    document.body.style.transform = `scale(${
      currentRation > designRatio ? scaleRatioByHeight : scaleRatioByWidth
    }) translateX(-50%)`;
    document.body.style.left = '50%';
  }
}
