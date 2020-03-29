import utils from '../utils';
import init from './init';
import { renderText } from '../render';
import { arc } from '../arc';
import { getByteLength } from '../text';
import BlueQueuePipe from 'blue-queue-pipe';

interface BlueCanvasTmplOpts {
	width?: number;
	height?: number;
	created?: Function;
	rendered?: Function;
	el?: string;
	renderList?: (Function | {
		type: 'image' | 'text';
		drawType: 'fill' | 'stroke';
		src?: string;
		x?: number;
		y?: number;
		width?: number;
		height?: number;
		font?: string;
		style?: string;
		created?: Function;
		rendered?: Function;
	})[];
}

class BlueCanvasTmpl {
	//配置选项
	private options: BlueCanvasTmplOpts = {};
	//加载队列存储
	private loadQueue: BlueQueuePipe;
	//画布context
	private canvasCtx: CanvasRenderingContext2D;
	//画布Element
	private canvas: any = {};
	//当前渲染id
	private id: number = 0;

	constructor ( opts: BlueCanvasTmplOpts = {} ) {
		this.options = opts;
		this.id = 0;
		init.call(this);
	}

	renderText ( text: string ): void {
		renderText.call(this, text);
	}

	//初始化canvas context的属性
	resetCanvasProperties (): void {
		const { defaultCanvasProperties } = this.canvas;
		utils.each(defaultCanvasProperties, ( value, key ) => {
			this.canvasCtx[ key ] = value;
		});
	}

	//更新
	update ( options?: BlueCanvasTmplOpts ): void {
		if (options) {
			this.options = options;
		}
		this.canvasCtx.clearRect(0, 0, this.options.width || 100, this.options.height || 100);
		init.call(this);
	}

	arc ( ...args: any[] ): void {
		arc.apply(this, [...args]);
	}

	getByteLength (): number | {
		val: string;
		lastVal: string;
	} {
		return getByteLength.apply(this, arguments);
	}

	static getByteLength (): number | {
		val: string;
		lastVal: string;
	} {
		return getByteLength.apply(this, arguments);
	}

}

export default BlueCanvasTmpl;