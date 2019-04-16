<template>
  <div class="searchBox">
    <img src="./icons/searchIcon.png" alt="">
    <input type="text" :placeholder="inputDefaultVal" v-model:value="inputVal" @keyup.enter="inputSubmit">
  </div>
</template>
<script>
export default {
  name:'search',
  data(){
    return {
      inputVal:'',
      inputDefaultVal:'都挺好',
    }
  },
  methods:{
    inputSubmit(){
      let val = this.inputVal||this.inputDefaultVal;
      console.log(val)
    }
  }
}
</script>
<style lang="less">
.searchBox{
  width: 100%;
  height: 4rem;
  background-color: #fff;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  >img{
    margin:1.3rem;
    width: 2.4rem;
  }
  >input{
    flex: 1;
    margin-right:1.3rem;
    background-color: #fff;
    border:none;
    font-size: 2rem;
    color:#999;
    outline: none;
  }
}
</style>

