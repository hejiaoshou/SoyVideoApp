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
    this.appInfo.version = '1.0.1'
  },
  data(){
    return{

    }
  },
  mounted(){}
}
</script>

<style lang="less">
@import '~mint-ui/lib/style.min.css'; 
html,
body,
#app{
  height: 100%;
}
body{
  margin:0px;
}
</style>
