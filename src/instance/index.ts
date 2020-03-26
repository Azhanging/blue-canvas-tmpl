import utils from 'blue-utils';
import init from './init';
import { renderText } from '../render';
import { arc } from '../arc';
import { getByteLength } from '../text';

interface BlueCanvasTmplOpts {
	width?: number;
	height?: number;
	created?: Function;
	renderList?: (Function | {
		type: 'image' | 'text',
		x: number;
		y: number;
		font?: string;
		style?: string;
		created?: Function;
		rendered?: Function;
	})[];
	rendered?: Function;
	el?: string;
}

class BlueCanvasTmpl {
	//配置选项
	private options: BlueCanvasTmplOpts;
	//加载队列存储
	private loadQueue: any[];
	//画布context
	private canvasCtx: CanvasRenderingContext2D;
	//画布Element
	private canvas: any = {};
	private id: number = 0;

	constructor ( opts = {} ) {
		this.options = opts;
		init.call(this);
	}

	renderText ( text ): void {
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
	update ( options ?: BlueCanvasTmplOpts ) {
		if (options) {
			this.options = options;
		}
		this.canvasCtx.clearRect(0, 0, this.options.width || 100, this.options.height || 100);
		init.call(this);
	}

	arc () {
		arc.apply(this, arguments);
	}

	getByteLength () {
		return getByteLength.apply(this, arguments);
	}

	static getByteLength () {
		return getByteLength.apply(this, arguments);
	}

}

export default BlueCanvasTmpl;