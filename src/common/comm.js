//SOY 视频APP公共信息
const appInfo = {
  version : '0.1.1',
  client: 'android',
};

export default {
  install(Vue){
    //SOY 视频APP版本号:
    Vue.prototype.appInfo = appInfo;
  }
}