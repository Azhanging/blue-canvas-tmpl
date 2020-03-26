//获取当前设备信息
const userAgent = navigator.userAgent;
const isWap = /iPhone|iPad|Android|Windows Phone|KFAPWI|MeeGo/ig.test(userAgent);

const device = {
	isWeChat: /MicroMessenger/ig.test(userAgent),
	isWap,
	isIPhone: /iPhone/ig.test(userAgent),
	isIPad: /iPad/ig.test(userAgent),
	isAndroid: /Android/ig.test(userAgent),
	isApp: false,
	isPc: !isWap,
	isServer: false
};

export default device;