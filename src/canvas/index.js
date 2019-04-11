import utils from 'blue-utils';
import canvasProperties from './canvas-properties';

export function initCanvas() {
  const options = this.options;
  if (!options.el) return {};
  const canvas = document.querySelector(options.el);
  if (!canvas) return {};
  const canvasCtx = canvas.getContext('2d');
  canvas.width = options.width;
  canvas.height = options.height;
  return {
    canvasCtx,
    canvas
  };
}

//save canvas default attributes
export function saveCanvasDefaultProperties() {
  if (!this.canvas.defaultCanvasProperties) {
    this.canvas.defaultCanvasProperties = {};
    utils.each(canvasProperties, (key) => {
      this.canvas.defaultCanvasProperties[key] = this.canvasCtx[key];
    });
  }
}