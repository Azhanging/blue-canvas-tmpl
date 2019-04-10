import init from './init';
import { renderText } from '../render';
import { arc } from '../arc';
import { getByteLength } from '../text';

class BlueCanvasTmpl {
  constructor(opts = {
    //创建后的钩子
    created() {

    },
    renderList: [/*{
      type: 'img',
      src: '',
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      created() {
        //创建前的钩子
      },
      rendered() {
        //渲染后的钩子
      }
    }, {
      type: 'text',
      font: '',
      style: '',
      content: '',
      x: 0,
      y: 0
    }*/],
    //渲染完毕后的钩子
    rendered() {

    }
  }) {
    this.init(opts);
  }

  init(opts) {
    init.call(this, opts);
  }

  renderText(text) {
    renderText.call(this, text);
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