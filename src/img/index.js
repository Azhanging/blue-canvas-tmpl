import utils from 'blue-utils';
import BlueQueuePipe from 'blue-queue-pipe';
import render from '../render';

//预加载
export function load() {
  const blueCanvasTmpl = this;
  this.id++;
  //设置预加载的队列
  this.loadQueue = new BlueQueuePipe({
    methods: {
      next() {
        if (!this.isEmpty()) {
          utils.hook(this, this.dequeue());
        } else {
          console.log('render');
          //没有就进行渲染
          render.call(blueCanvasTmpl);
        }
      }
    }
  });
  //查找渲染中为图片，预加载图片
  loadImgs.call(this, findImgs.call(this));
}

//查找图片
function findImgs() {
  const { renderList } = this.options;
  const imgs = [];
  utils.each(renderList, (item) => {
    if (item.type === 'img') {
      imgs.push(item);
    }
  });
  return imgs;
}

//预加载图片
function loadImgs(imgs) {
  const id = this.id;
  (imgs || []).forEach((img) => {
    if (!img.src) return;
    this.loadQueue.enqueue(() => {
      const image = new Image();
      image.id = this.id;
      image.onload = () => {
        //限定执行的id
        if (parseInt(image.id) === id) {
          img.image = image;
          //队列下一跳
          console.log('success');
          this.loadQueue.useMethod('next');
        }
      };

      image.onerror = () => {
        //队列下一跳
        console.log('error');
        this.loadQueue.useMethod('next');
      };

      image.src = img.src;

    });
  });
  console.log('next');
  this.loadQueue.useMethod('next');
}