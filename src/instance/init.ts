import { initCanvas } from '../canvas';
import utils from '../utils';
import { load } from '../img';
import { saveCanvasDefaultProperties } from '../canvas';

function init () {
	//预加载队列
	this.loadQueue = [];
	const { canvas, canvasCtx } = initCanvas.call(this);
	if (!canvas) {
		return console.warn(`element is null`);
	}
	this.canvasCtx = canvasCtx;
	this.canvas = canvas;
	saveCanvasDefaultProperties.call(this);
	//创建完毕的钩子
	utils.hook(this, this.options.created);
	//预加载
	load.call(this);
}

export default init;