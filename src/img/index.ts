import BlueQueuePipe from 'blue-queue-pipe';
import utils from '../utils';
import render from '../render';

//预加载
export function load (): void {
	const blueCanvasTmpl = this;
	this.id++;
	//设置预加载的队列
	this.loadQueue = new BlueQueuePipe({
		methods: {
			next () {
				if (!this.isEmpty()) {
					utils.hook(this, this.dequeue());
				} else {
					//没有就进行渲染
					render.call(blueCanvasTmpl);
				}
			}
		}
	});
	//查找渲染中为图片，预加载图片
	loadImages.call(this, findImages.call(this));
}

//查找图片
function findImages () {
	const { renderList } = this.options;
	const images = [];
	utils.each(renderList, ( item ) => {
		if (item.type === 'image') {
			images.push(item);
		}
	});
	return images;
}

//预加载图片
function loadImages ( images ) {
	const id = this.id;
	(images || []).forEach(( img ) => {
		if (!img.src) return;
		this.loadQueue.enqueue(() => {
			const image = new Image();
			image.id = this.id;
			image.onload = () => {
				//限定执行的id
				if (parseInt(image.id) !== id) return;
				//写入图片到配置
				img.image = image;
				//队列下一跳
				this.loadQueue.useMethod('next');
			};

			image.onerror = () => {
				//队列下一跳
				console.warn(`load error:${image.src}`);
				//限定执行的id
				if (parseInt(image.id) !== id) return;
				this.loadQueue.useMethod('next');
			};

			image.src = img.src;

		});
	});
	this.loadQueue.useMethod('next');
}