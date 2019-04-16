<template>
  <div class="videoList">
    <!-- 视频列表头部信息 -->
    <div class="head">
      <div class="title">
        <i></i>
        <span>推荐视频</span>
      </div>
      <div class="more">
        <span>更多</span>
        <i></i>
      </div>
    </div>
    <!-- 视频列表内容 -->
    <div class="list">
      <div class="item" v-for="item in videoList">
        <img class="cover" :src="item.img" alt="">
        <div class="updateInfo">{{item.updateInfo}}</div>
        <div class="name">都挺好都挺好都挺好都挺好都挺好</div>
        <div class="tag">
          <div class="item">
            <img src="./icons/praise.png" alt="">
            <span>120002</span>
          </div>
          <div class="item">
            <img src="./icons/comment.png" alt="">
            <span>310</span>
          </div>
          <div class="item">
            <img src="./icons/browse.png" alt="">
            <span>123000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'videoList',
  props:['videoList'],
}
</script>
<style lang="less">
.videoList{
  margin-top:0.7rem;
  background-color: #fff;
  .head{
    height: 6rem;
    width: 100%;
    display: flex;
    border-bottom:1px solid #efefef;
    .title{
      padding-left:2.4rem;
      flex: 1;
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
    .more{
      padding-right:2.4rem;
      display: flex;
      align-items: center;
      >span{
        font-size: 1.8rem;
        color:#787878;
      }
      >i{
        background: url(./icons/more.png) no-repeat;
        background-size: cover;
        width: 1.7rem;
        height:1.7rem;
      }
    }
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding-bottom:1.5rem;
    >.item{
      margin-left:0.66rem;
      width: 24.67rem;
      margin:0.67rem 0rem 0.67rem 0.66rem;
      position: relative;
      .cover{
        width: 100%;
        height: 16rem;
        object-fit: cover;
      }
      .updateInfo{
        position: absolute;
        width: 21.87rem;
        color:#fff;
        padding:0rem 1.4rem;
        top:12.8rem;
        height: 2rem;
        font-size: 1.65rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        text-align: right;
      }
      .name{
        padding:1.2rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 2rem;
      }
      .tag{
        padding:0rem 1.2rem;
        display:flex;
        align-items:center;
        height:2.5rem;
        >.item{
          flex:1;
          display:flex;
          margin-left:0.8rem;
          justify-content:center;
          align-items:center;
          img{
            width:2.2rem;
            height:1.8rem;
          }
          span{
            line-height:2.5rem;
            margin-left:0.3rem;
            font-size:1.5rem;
          }
        }
        >.item:nth-child(1){
          margin-left:0rem;
        }
      }
    }
    >.item:nth-child(2n+1){
      margin-left:0rem;
    }
  }
}
</style>
