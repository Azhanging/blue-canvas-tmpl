interface BlueCanvasTmplOpts {
    width?: number;
    height?: number;
    created?: Function;
    rendered?: Function;
    el?: string;
    renderList?: (Function | {
        type: 'image' | 'text';
        drawType: 'fill' | 'stroke';
        src?: string;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        font?: string;
        style?: string;
        created?: Function;
        rendered?: Function;
    })[];
}
declare class BlueCanvasTmpl {
    private options;
    private loadQueue;
    private canvasCtx;
    private canvas;
    private id;
    constructor(opts?: BlueCanvasTmplOpts);
    renderText(text: string): void;
    resetCanvasProperties(): void;
    update(options?: BlueCanvasTmplOpts): void;
    arc(...args: any[]): void;
    getByteLength(): number | {
        val: string;
        lastVal: string;
    };
    static getByteLength(): number | {
        val: string;
        lastVal: string;
    };
}
export default BlueCanvasTmpl;
