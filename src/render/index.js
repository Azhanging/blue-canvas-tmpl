import utils from 'blue-utils';

//渲染
export default function render() {
  const renderList = this.options.renderList;
  (renderList || []).forEach((item) => {
    if (item.type === 'img') {
      renderImg.call(this, item);
    } else if (item.type === 'text') {
      renderText.call(this, item);
    }
  });
}

//渲染图片
function renderImg(img) {
  //插入图片
  if (img.image) {
    utils.hook(this, img.created, [img]);
    this.canvasCtx.drawImage(img.image, img.x, img.y, img.width, img.height);
    utils.hook(this, img.rendered, [img]);
  }
}

//渲染文字
export function renderText(text) {
  utils.hook(this, text.created, [text]);
  const canvasCtx = this.canvasCtx;
  canvasCtx.font = text.font || '15px arial, 微软雅黑, sans-serif';
  canvasCtx.fillStyle = text.style || '#000';
  canvasCtx.fillText(text.content, text.x, text.y);
  utils.hook(this, text.rendered, [text]);
}

