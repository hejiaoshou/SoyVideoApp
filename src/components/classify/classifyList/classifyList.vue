<template>
  <div class="classifyList">
    <!-- 分类列表头部信息 -->
    <div class="head">
      <div class="title">
        <i></i>
        <span>{{classifyList.title}}</span>
      </div>
    </div>
    <!-- 分类列表内容 -->
    <div class="list">
      <div class="item" v-for="item in classifyList.list">
        <img :src="item.img" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'classifyList',
  props:['classifyList'],
  data(){
    return{

    }
  }
}
</script>
<style lang="less">
.classifyList{
  margin-bottom:0.7rem;
  background-color: #fff;
  padding:0rem 2.4rem;
  .head{
    height: 7rem;
    width: 100%;
    display: flex;
    .title{
      display: flex;
      align-items: center;
      >i{
        width: 0.4rem;
        height: 2.66rem;
        background-color: #ff6600;
      }
      >span{
        margin-left:0.7rem;
        flex:1;
        font-size: 2.1rem;
        font-weight: 600;
        color:#ff6600;
      }
    }
  }
  >.list{
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding-bottom:1.5rem;
    >.item{
      width: 14.5rem;
      padding-bottom:1.5rem;
      >img{
        width: 100%;
        height: 16rem;
        object-fit: cover;
      }
      >span{
        font-size: 1.9rem;
        line-height: 4rem;
        text-align: center;
        width: 100%;
        display: inline-block;
        font-weight: 600;
      }
    }
    >.item:nth-child(3n+2){
      margin:0rem 0.85rem;
    }
  }
}
</style>
