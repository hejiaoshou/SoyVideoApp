//SOY 视频APP公共信息
const appInfo = {
  version : '0.0.2',
  clientSystem: 'android',
  clientWidth:window.screen.width,
  clientHeight:window.screen.height,
  clientUnitWidth:window.screen.width/50
};
//设置设备单位宽度
function setUnitWidth(){
  let htmlTag = document.getElementsByTagName('html')[0];
  htmlTag.style.fontSize = `${appInfo.clientWidth/50}px`;
};
setUnitWidth();
//页面尺寸变化监听
window.onresize = () => {
  appInfo.clientWidth = window.screen.width;
  appInfo.clientUnitWidth = appInfo.clientWidth/50;
  setUnitWidth();
}
//调用原生api判断plus是否挂载并执行传入方法
function plusLoad(func){
  if(window.plus){
    func();
  }else{
    document.addEventListener('plusready',func,false);
  };
}
