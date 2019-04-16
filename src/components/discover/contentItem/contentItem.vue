<template>
  <div  class="discoverContent">
    <!-- 活动banner -->
    <div class="activityBanner"
      @touchstart="swipetouchstart"
      @touchend="swipetouchend"
      >
      <swipe
      :auto="4000"
      :showIndicators="false"
      @change="nowSwipeIndex"
      >
        <swipe-item v-for="item in contentItem.swipe">
          <img :src="item.img" alt="">
        </swipe-item>
      </swipe>
    </div>
    <!-- 文字广告 和上边banner对应-->
    <div class="textActivity">
      <span>{{textActivity}}</span>
    </div>
    <!-- 视频列表 -->
    <div class="discoverVideoList">
      <div class="item">
        <div class="cover" style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554738808224&di=7f8acf1b9abf577ec5ed8ad579461cb5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201408%2F28%2F20140828194141_EZcAP.jpeg)">
          <img src="./icons/pause.png" alt="">
        </div>
        <div class="info">
          <span class="title">我是我是我是我是我是我是我是</span>
          <div class="tag">
            <div><img src="./icons/like.png" alt=""><span>1554</span></div>
            <div><img src="./icons/comment.png" alt=""><span>5454</span></div>
            <div><img src="./icons/look.png" alt=""><span>545</span></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="cover" style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554738808224&di=7f8acf1b9abf577ec5ed8ad579461cb5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201408%2F28%2F20140828194141_EZcAP.jpeg)">
          <img src="./icons/pause.png" alt="">
        </div>
        <div class="info">
          <span class="title">我是我是我是我是我是我是我是</span>
          <div class="tag">
            <div><img src="./icons/like.png" alt=""><span>1554</span></div>
            <div><img src="./icons/comment.png" alt=""><span>5454</span></div>
            <div><img src="./icons/look.png" alt=""><span>545</span></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="cover" style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554738808224&di=7f8acf1b9abf577ec5ed8ad579461cb5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201408%2F28%2F20140828194141_EZcAP.jpeg)">
          <img src="./icons/pause.png" alt="">
        </div>
        <div class="info">
          <span class="title">我是我是我是我是我是我是我是</span>
          <div class="tag">
            <div><img src="./icons/like.png" alt=""><span>1554</span></div>
            <div><img src="./icons/comment.png" alt=""><span>5454</span></div>
            <div><img src="./icons/look.png" alt=""><span>545</span></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="cover" style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554738808224&di=7f8acf1b9abf577ec5ed8ad579461cb5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201408%2F28%2F20140828194141_EZcAP.jpeg)">
          <img src="./icons/pause.png" alt="">
        </div>
        <div class="info">
          <span class="title">我是我是我是我是我是我是我是</span>
          <div class="tag">
            <div><img src="./icons/like.png" alt=""><span>1554</span></div>
            <div><img src="./icons/comment.png" alt=""><span>5454</span></div>
            <div><img src="./icons/look.png" alt=""><span>545</span></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="cover" style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554738808224&di=7f8acf1b9abf577ec5ed8ad579461cb5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201408%2F28%2F20140828194141_EZcAP.jpeg)">
          <img src="./icons/pause.png" alt="">
        </div>
        <div class="info">
          <span class="title">我是我是我是我是我是我是我是</span>
          <div class="tag">
            <div><img src="./icons/like.png" alt=""><span>1554</span></div>
            <div><img src="./icons/comment.png" alt=""><span>5454</span></div>
            <div><img src="./icons/look.png" alt=""><span>545</span></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="cover" style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554738808224&di=7f8acf1b9abf577ec5ed8ad579461cb5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201408%2F28%2F20140828194141_EZcAP.jpeg)">
          <img src="./icons/pause.png" alt="">
        </div>
        <div class="info">
          <span class="title">我是我是我是我是我是我是我是</span>
          <div class="tag">
            <div><img src="./icons/like.png" alt=""><span>1554</span></div>
            <div><img src="./icons/comment.png" alt=""><span>5454</span></div>
            <div><img src="./icons/look.png" alt=""><span>545</span></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="cover" style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554738808224&di=7f8acf1b9abf577ec5ed8ad579461cb5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201408%2F28%2F20140828194141_EZcAP.jpeg)">
          <img src="./icons/pause.png" alt="">
        </div>
        <div class="info">
          <span class="title">我是我是我是我是我是我是我是</span>
          <div class="tag">
            <div><img src="./icons/like.png" alt=""><span>1554</span></div>
            <div><img src="./icons/comment.png" alt=""><span>5454</span></div>
            <div><img src="./icons/look.png" alt=""><span>545</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name:'discoverContent',
  props:['contentItem'],
  components:{
    Swipe,
    SwipeItem
  },
  data(){
    return{
      textActivity:this.contentItem.swipe[0].title,
    }
  },
  created(){
  
  },
  methods:{
    //轮播当前下标监控
    nowSwipeIndex(index){
     this.textActivity =  this.contentItem.swipe[index].title;
    },
    //轮播触摸事件监控->开始
    swipetouchstart(){
      this.$emit("chlidTransmit",{topNavSwitch:false});
    },
    //轮播触摸事件监控->结束
    swipetouchend(){
      this.$emit('chlidTransmit',{topNavSwitch:true});
    },
    
  },
  mounted(){
  },
  computed:{
   
  }
}

</script>
<style lang="less">
.discoverContent{
  >.activityBanner{
    height: 26.667rem;
    >.mint-swipe{
      .mint-swipe-item{
        >img{
          width:100%;
          object-fit: cover;
        }
      }
    }
  }
  >.textActivity{
    height: 5.3rem;
    padding:0rem 2.4rem;
    display: flex;
    align-items: center;
    background-color: #f3f3f3;
    >span{
      flex: 1;
      font-size: 2rem;
      color:#555;
      line-height: 5.3rem;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
       
  }
  >.discoverVideoList{
    width: 100%;
    margin-bottom:2rem;
    >.item{
      >.cover{
        width: 100%;
        height: 26.667rem;
        background-size:cover;
        display: flex;
        justify-content: center;
        align-items: center;
        >img{
          width: 3rem;
          height: 5rem;
        }
      }
      >.info{
        padding:0rem 2.4rem;
        height: 6rem;
        display: flex;
        align-items: center;
        >.title{
          flex: 6;
          line-height: 6rem;
          color:#333333;
          font-weight: 600;
          font-size: 1.867rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        >.tag{
          flex: 5;
          display: flex;
          >div{
            margin-left:1rem;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            >img{
              object-fit: cover;
            }
            >span{
              margin-left:0.5rem;
              font-size: 1.6rem;
              color:#999999;
              letter-spacing: 0rem;
            }
          }
          >div:nth-child(1)>img{
            width: 2rem;
            height:2rem;
            }
          >div:nth-child(2)>img{
            width: 2.5rem;
            height:2rem;
          }
          >div:nth-child(3)>img{
            width: 2.6rem;
            height:1.6rem;
          }
        }
      }
    }
  }
}
</style>

