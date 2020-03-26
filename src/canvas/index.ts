import utils from 'blue-utils';
import canvasProperties from './canvas-properties';

export function initCanvas (): any {
	const options = this.options;
	if (!options.el) return {};
	const canvas: HTMLCanvasElement = document.querySelector(options.el);
	if (!canvas) return {};
	const canvasCtx: CanvasRenderingContext2D = canvas.getContext('2d');
	canvas.width = options.width;
	canvas.height = options.height;
	return {
		canvasCtx,
		canvas
	};
}

//save canvas default attributes
export function saveCanvasDefaultProperties (): void {
	if (!this.canvas.defaultCanvasProperties) {
		this.canvas.defaultCanvasProperties = {};
		utils.each(canvasProperties, ( key ) => {
			this.canvas.defaultCanvasProperties[ key ] = this.canvasCtx[ key ];
		});
	}
}