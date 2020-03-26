import device from '../device';

export function getByteLength ( content: string, length?: number, last: boolean = false ): number | {
	val: string;
	lastVal: string;
} {
	let len: number = 0;
	for (let i = 0; i < content.length; i++) {
		let char: string = content.charAt(i);
		if (
			char.match(/[\u4E00-\u9FBF]/ig) != null ||
			char.match(/[\u2014\u300a\u300b]/g) ||
			(char.match(/[\uff0c\u3002\u201c\uff1a\u201d\u2014]/ig) != null && !device.isWap) ||
			(char.match(/[\uff0c\u3002\uff1a]/ig) != null && device.isWap)
		) {
			len += 2;
		} else {
			len += 1;
		}
		//满足截取的字符长度
		//截取的字符等于已经抓到的len，
		if (length !== undefined && (length === len || length < len)) {
			return {
				val: content.substr(0, i + 1),
				lastVal: content.substr(i + 1)
			};
		}
	}
	if (length !== undefined && last === true) {
		return {
			val: content.substr(0),
			lastVal: ''
		};
	}
	return len;
}