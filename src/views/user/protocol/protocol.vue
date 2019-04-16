<template>
  <div class="protocol">
    <div class="header">
      <img
        src="./icons/back.png"
        alt=""
        @click="$router.go(-1)"
      >
      <span>用户服务协议</span>
    </div>
    <div class="main">

      一、总则

      1.1　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。
      1.2　用户注册成功后，产品名称将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管用户应当对以其用户帐号进行的所有活动和事件负法律责任。
      1.3　用户可以使用产品名称各个频道单项服务，当用户使用产品名称各单项服务时，用户的使用行为视为其对该单项服务的服务条款以及产品名称在该单项服务中发出的各类公告的同意。

      1.1　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。
      1.2　用户注册成功后，产品名称将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管用户应当对以其用户帐号进行的所有活动和事件负法律责任。
      1.3　用户可以使用产品名称各个频道单项服务，当用户使用产品名称各单项服务时，用户的使用行为视为其对该单项服务的服务条款以及产品名称在该单项服务中发出的各类公告的同意。

      1.1　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。
      1.2　用户注册成功后，产品名称将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管用户应当对以其用户帐号进行的所有活动和事件负法律责任。
      1.3　用户可以使用产品名称各个频道单项服务，当用户使用产品名称各单项服务时，用户的使用行为视为其对该单项服务的服务条款以及产品名称在该单项服务中发出的各类公告的同意。

      1.1　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。
      1.2　用户注册成功后，产品名称将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管用户应当对以其用户帐号进行的所有活动和事件负法律责任。
      1.3　用户可以使用产品名称各个频道单项服务，当用户使用产品名称各单项服务时，用户的使用行为视为其对该单项服务的服务条款以及产品名称在该单项服务中发出的各类公告的同意。

    </div>
  </div>
</template>
<script>
export default {
  name:'protocol',
  data(){
    return{

    }
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      //进入页面时设置状态栏字体颜色
      vm.setStatusBar('into');
    })
  },
  watch:{
    //离开页面时设置状态栏字体颜色
    $route(to,from){
      if(from.path === '/protocol'){
        this.setStatusBar();
      }
    }
  }
};
</script>
<style lang="less">
.protocol{
  height: 100%;
  background-color: #fff;
  >.header{
    padding-top: 3rem;
    height: 7rem;
    position: fixed;
    top:0rem;
    width: 100%;
    background-color: #fff;
    border-bottom:1px solid #efefef;
    display: flex;
    align-items: center;
    >img{
      padding:2.3rem;
      width: 2.4rem;
      height: 2.4rem;
    }
    >span{
      flex:1;
      margin-right:7rem;
      text-align:center;
      color:#333;
      font-size:2.4rem;
    }
  }
  >.main{
    padding:11rem 2.4rem 5rem;
    box-sizing: border-box;
    height: 100%;
    overflow-y: scroll;
    font-size: 2rem;
  }
}
</style>

