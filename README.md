# blue-canvas-tmpl
canvas template

### 使用
```typescript
interface BlueCanvasTmplOpts {
    //canvas宽度
    width?: number;
    //canvas高度
    height?: number;
    //创建 hook
    created?: Function;
    //完全绘制完成后钩子
    rendered?: Function;
    //canvas的element id
    el?: string;
    //渲染列表
    renderList?: (Function | {
        //图片和文字类型
        type: 'image' | 'text';
        //相对canvas的x坐标
        x: number;
        //相对canvas的y坐标
        y: number;
        //字体
        font?: string;
        //字体样式
        style?: string;
        //绘制前钩子
        created?: Function;
        //绘制后钩子
        rendered?: Function;
    })[];
}
declare class BlueCanvasTmpl {
    private options;
    private loadQueue;
    private canvasCtx;
    private canvas;
    private id;
    constructor(opts?: {});
    renderText(text: any): void;
    resetCanvasProperties(): void;
    update(options?: BlueCanvasTmplOpts): void;
    arc(): void;
    getByteLength(): any;
    static getByteLength(): any;
}
```