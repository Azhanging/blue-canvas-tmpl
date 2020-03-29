declare const blueUtils: {
    isArray(val: any): boolean;
    isUndef(val: any): boolean;
    isFunction(fn: any): boolean;
    hook(context: any, cb: any, args?: any[]): any;
    each(obj: any, cb: Function, isReturn?: boolean): void | any[];
};
export default blueUtils;
