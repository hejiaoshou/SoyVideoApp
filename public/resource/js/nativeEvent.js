
if(window.plus){
  console.log('cesdsa')
}else{
  document.addEventListener('plusready',function(){
    console.log(`测试通过`);
  },false);
}