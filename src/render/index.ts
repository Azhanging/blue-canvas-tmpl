import utils from 'blue-utils';

//渲染
export default function render() {
  const options = this.options;
  const renderList = options.renderList;
  (renderList || []).forEach((item) => {
    if (item.type === 'image') {
      renderImg.call(this, item);
    } else if (item.type === 'text') {
      renderText.call(this, item);
    } else if (utils.isFunction(item)) {
      utils.hook(this, item);
    }
    this.resetCanvasProperties();
  });
  utils.hook(this, options.rendered);
}

//渲染图片
function renderImg(opts) {
  //插入图片
  if (opts.image) {
    utils.hook(this, opts.created, [opts]);
    this.canvasCtx.drawImage(opts.image, opts.x, opts.y, opts.width, opts.height);
    utils.hook(this, opts.rendered, [opts]);
  }
}

//渲染文字
export function renderText(opts) {
  utils.hook(this, opts.created, [opts]);
  const canvasCtx = this.canvasCtx;
  canvasCtx.font = opts.font || '15px arial, 微软雅黑, sans-serif';
  canvasCtx.fillStyle = opts.style || '#000';
  canvasCtx.fillText(opts.content, opts.x, opts.y);
  utils.hook(this, opts.rendered, [opts]);
}

