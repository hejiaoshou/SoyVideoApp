<template>
  <div class="home">
    <div class="topSearchBox">
      <div class="boxInner">
        
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted(){
    console.log(JSON.stringify( this.appInfo))
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      
    })
  },
  watch:{
    
  }
}
</script>
<style lang="less">
.home{
  .topSearchBox{
    padding-top:35px;
    height: 45px;
    width: 100%;
    background-color: #ff6600;
  }
}
</style>
