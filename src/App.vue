<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
export default {
  beforeCreate(){
    
  },
  data(){
    return{
    }
  },
  methods:{
    
  },
  created (){
    
  },
  mounted(){
   
  }
}
</script>

<style lang="less">
@import '~mint-ui/lib/style.min.css';
html{
  font-size: 7.5px;
  letter-spacing:0.08rem;
}
body{
  margin:0px;
  background-color: #efefef;
}
html,body,#app{
  height: 100%;
  overflow: hidden;
}
</style>
