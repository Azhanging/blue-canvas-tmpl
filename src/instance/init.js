import { initCanvas } from "../canvas";
import utils from 'blue-utils';
import { load } from '../img';

function init(opts) {
  this.options = opts;
  //预加载队列
  this.loadQueue = [];
  this.id = 0;
  const { canvas, canvasCtx } = initCanvas.call(this);
  if (!canvas) {
    console.warn(`element is null`);
    return;
  }
  this.canvasCtx = canvasCtx;
  this.canvas = canvas;
  //创建完毕的钩子
  utils.hook(this, this.options.created);
  //预加载
  load.call(this);
}

export default init;