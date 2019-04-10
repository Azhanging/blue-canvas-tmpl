//获取当前设备信息
export default function device() {
  //默认
  let device = {
    isWeChat: false,  //是否在微信端
    isWap: false,     //是否为移动设备
    isIPhone: false,
    isIPad: false,
    isAndroid: false,
    isApp: false,     //是否在app webview
    isPc: false,      //是否为电脑端
    isServer: true    //是否在服务器端 预留ssr处理
  };

  try {
    const userAgent = navigator.userAgent;
    const isWap = /iPhone|iPad|Android|Windows Phone|KFAPWI|MeeGo/ig.test(userAgent);
    const isWeChat = /MicroMessenger/ig.test(userAgent);
    device = {
      isWeChat,
      isWap,
      isIPhone: /iPhone/ig.test(userAgent),
      isIPad: /iPad/ig.test(userAgent),
      isAndroid: /Android/ig.test(userAgent),
      isApp: false,
      isPc: !isWap,
      isServer: false
    };
  } catch (e) {

  }

  return device;
}