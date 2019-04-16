

export default {
  install(Vue){
    //设置app状态栏字体颜色 plusLoad判断plus组件是否装载
    Vue.prototype.setStatusBar = function (start){
      let color = start==='into'?'dark':'light';
      plusLoad(()=>{
        plus.navigator.setStatusBarStyle(color);
      })
    }
  }
}