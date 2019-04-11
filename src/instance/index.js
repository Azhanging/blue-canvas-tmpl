import init from './init';
import { renderText } from '../render';
import { arc } from '../arc';
import { getByteLength } from '../text';
import utils from 'blue-utils';

class BlueCanvasTmpl {
  constructor(opts = {
    //创建后的钩子
    created() {
    },
    renderList: [],
    //渲染完毕后的钩子
    rendered() {
    }
  }) {
    this.options = opts;
    this.init();
  }

  init() {
    init.call(this);
  }

  renderText(text) {
    renderText.call(this, text);
  }

  //初始化canvas context的属性
  resetCanvasProperties() {
    utils.each(this.canvas.defaultCanvasProperties, (value, key) => {
      this.canvasCtx[key] = value;
    });
  }

  //更新
  update(options) {
    if (options) {
      this.options = options;
    }
    this.canvasCtx.clearRect(0, 0, this.options.width, this.options.height);
    this.init();
  }

  arc() {
    arc.apply(this, arguments);
  }

  getByteLength() {
    return getByteLength.apply(this, arguments);
  }

  static getByteLength() {
    return getByteLength.apply(this, arguments);
  }

}

export default BlueCanvasTmpl;