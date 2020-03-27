interface BlueCanvasTmplOpts {
    width?: number;
    height?: number;
    created?: Function;
    renderList?: (Function | {
        type: 'image' | 'text';
        x: number;
        y: number;
        font?: string;
        style?: string;
        created?: Function;
        rendered?: Function;
    })[];
    rendered?: Function;
    el?: string;
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
export default BlueCanvasTmpl;
