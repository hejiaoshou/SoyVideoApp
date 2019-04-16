<template>
  <div class="bottomNav">
    <div class="item" v-for="(item,i) in navList" @click="goTo(i)">
      <img :src="i===nowIndex?item.iconImg_s:item.iconImg" alt="">
      <span :style="i===nowIndex?'color:#ff6600':''">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'bottomNav',
  props:["nowIndex"],
  data(){
    return{
      navList:[
        {
          name:'首页',
          iconImg:'./resource/images/icons/home.png',
          iconImg_s:'./resource/images/icons/home_s.png',
          goTo:'/home'
        },
        {
          name:'分类',
          iconImg:'./resource/images/icons/classify.png',
          iconImg_s:'./resource/images/icons/classify_s.png',
          goTo:'/classify'
        },
        {
          name:'发现',
          iconImg:'./resource/images/icons/find.png',
          iconImg_s:'./resource/images/icons/find_s.png',
          goTo:'/discover'
        },
        {
          name:'我的',
          iconImg:'./resource/images/icons/my.png',
          iconImg_s:'./resource/images/icons/my_s.png',
          goTo:'/my'
        }
      ]
    }
  },
  methods:{
    goTo(i){
      if(this.nowIndex === i) return;
      this.$router.push({
        path:this.navList[i].goTo
      });
    }
  }
}
</script>
<style lang="less">
.bottomNav{
  position: fixed;
  bottom:0rem;
  width: 100%;
  display: flex;
  height: 6.667rem;
  background-color:#fff;
  z-index: 999;
  >.item{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >img{
      width: 3rem;
      height: 3rem;
    }
    >span{
      line-height:2.5rem;
      font-size: 1.4rem;
      color:#bfbfbf;
    }
  }
}
</style>

