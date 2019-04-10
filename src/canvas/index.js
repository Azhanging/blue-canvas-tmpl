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