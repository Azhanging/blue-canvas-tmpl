const blueUtils = {
	//是否为数组
	isArray ( val: any ): boolean {
		return val instanceof Array;
	},

	//是否为undefine 或者 null
	isUndef ( val: any ): boolean {
		return val === undefined || val === null;
	},

	//是否为function
	isFunction ( fn: any ): boolean {
		return typeof fn === 'function';
	},

	//执行function
	hook ( context: any, cb: any, args: any[] = [] ) {
		if (this.isFunction(cb)) {
			return cb.apply(context, args);
		}
		return cb;
	},

	//遍历
	each ( obj: any, cb: Function, isReturn: boolean = false ): any[] | void {
		if (this.isUndef(obj)) return;
		let i: number | string = 0,
			index: number = 0,
			newVal: any[] = [];

		const len: number = obj.length;

		if (this.isArray(obj)) {
			for (; i < len; i++) {
				if (isReturn) {
					newVal.push(cb(obj[ i ], i));
				} else {
					cb(obj[ i ], i);
				}
			}
		} else {
			for (i in obj) {
				if (!obj.hasOwnProperty(i)) continue;
				if (isReturn) {
					newVal.push(cb(obj[ i ], i, index++));
				} else {
					cb(obj[ i ], i, index++);
				}
			}
		}

		if (isReturn) return newVal;
	}
};

export default blueUtils;
