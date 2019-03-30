<template>
  <div class="about">
    <swipe :auto="times"
    :showIndicators='false'>
      <swipe-item class="swipeItem" v-for="(item,i) in lists" :key="i">
        <img :src="item" alt="" width="100%">
      </swipe-item>
    </swipe>
    <router-link to="/">首页</router-link>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  components:{
    Swipe,
    SwipeItem
  },
  data(){
    return{
      lists:[
       
      ],
      times:1000,
    }
  },
  methods:{
    onclick(){
     
    }
  },
  mounted(){
  },
  watch: {
    $route(to,from) {
    }
  },
}
</script>
<style lang="less">
.about{
  height: 100%;
  overflow: hidden;
  .mint-swipe{
    width: 100%;
    height: 80%;
  }
}
</style>
