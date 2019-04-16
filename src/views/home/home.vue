<template>
  <div class="home">
    <!-- 顶部搜索框盒子 -->
    <div class="topSearchBox">
      <div class="boxInner">
        <div class="searchBox">
          <img src="./icons/searchIcon.png" alt="">
          <span>{{searchDefault}}</span>
        </div>
        <img style="margin:0rem 1rem;" src="./icons/downloadRecordIcon.png" alt="">
        <img src="./icons/watchRecordIcon.png" alt="">
      </div>
    </div>
    <loadmore>
      <!-- 活动banner -->
      <div class="activityBanner">
        <swipe
        :auto="4000"
        :showIndicators="false"
        >
          <swipe-item v-for="item in activityBannerList">
            <img :src="item.img" alt="">
          </swipe-item>
        </swipe>
      </div>
      <!-- 视频分类盒子 -->
      <div class="videoClass">
        <div class="head">
          <div class="title">
            <i></i>
            <span>视频分类</span>
          </div>
          <div class="more">
            <span>更多</span>
            <i></i>
          </div>
        </div>
        <div class="cont">
          <div class="item" v-for="item in videoClassList">
            <img :src="item.img" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      <!-- 推荐视频列表 -->
      <videoList 
        :videoList="recommendVideoList"
      ></videoList>
      <!-- 广告banner -->
      <div class="advertisingBanner">
        <swipe
        :auto="4000"
        :showIndicators="false"
        >
          <swipe-item v-for="item in advertisingBannerList">
            <img :src="item.img" alt="">
          </swipe-item>
        </swipe>
      </div>
      <!-- 往期视频列表 -->
      <videoList 
        :videoList="recommendVideoList"
      ></videoList>
      <!-- 加载完成提示 -->
      <div class="loadOver">
        <i></i>
        <span>我是有底线的</span>
        <i></i>
      </div>
    </loadmore>
    <bottom-nav :nowIndex="0"></bottom-nav>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Loadmore } from 'mint-ui';
import videoList from '../../components/home/videoList/videoList.vue';
import bottomNav from '../../components/common/bottomNav/bottomNav.vue';
export default {
  name: 'home',
  components: {
    Swipe,
    SwipeItem,
    Loadmore,
    videoList,
    bottomNav
  },
  data(){
    return{
      searchDefault:'都挺好',//搜索框默认显示值
      activityBannerList:[
        {
          url:'',
          img:'./resource/images/homeTest/swipe0.png'
        },
      ],//轮播列表
      videoClassList:[
        {
          name:'热门推荐',
          img:'./resource/images/homeTest/class0.png',
          url:'',
        },
        {
          name:'电影',
          img:'./resource/images/homeTest/class1.png',
          url:'',
        },
        {
          name:'搞笑',
          img:'./resource/images/homeTest/class2.png',
          url:'',
        },
        {
          name:'儿童天地',
          img:'./resource/images/homeTest/class3.png',
          url:'',
        },
        {
          name:'电视剧',
          img:'./resource/images/homeTest/class4.png',
          url:'',
        },
        {
          name:'综艺',
          img:'./resource/images/homeTest/class5.png',
          url:'',
        },
        {
          name:'民间达人',
          img:'./resource/images/homeTest/class6.png',
          url:'',
        },
        {
          name:'全部分类',
          img:'./resource/images/homeTest/class7.png',
          url:'',
        },
      ],//视频分类列表
      recommendVideoList:[
        {
          img:'./resource/images/homeTest/videoCover.png',
          updateInfo:'更新至44集更新至44集更新至44集更新至44集',
          name:'都挺好的',
          praise:'',
        },
        {
          img:'./resource/images/homeTest/videoCover.png',
          updateInfo:'更新至44集',
        },
        {
          img:'./resource/images/homeTest/videoCover.png',
          updateInfo:'更新至44集',
        },
        {
          img:'./resource/images/homeTest/videoCover.png',
          updateInfo:'更新至44集',
        },
        {
          img:'./resource/images/homeTest/videoCover.png',
          updateInfo:'更新至44集',
        },
        {
          img:'./resource/images/homeTest/videoCover.png',
          updateInfo:'更新至44集',
        }
      ],//推荐视频列表
      advertisingBannerList:
      [
        {
          img:'./resource/images/homeTest/advertising.png',
          url:''
        }
      ]
    }
  },
  mounted(){
    let loadMore = document.getElementsByClassName('loadMore')[0];
    
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
  overflow: hidden;
  height: 100%;
  >.topSearchBox{
    top:0px;
    z-index: 999;
    position: fixed;
    width: 50rem;
    background-color: #ff6600;
    padding-top:3rem;
    height:6rem;
    .boxInner{
      padding:1rem 2.4rem;
      display: flex;
      align-items: center;
      .searchBox{
        flex: 1;
        height: 4rem;
        border-radius: 2rem;
        background-color: rgba(0,0,0,0.2);
        padding-left:1.5rem;
        display: flex;   
        img{
          margin:0.9rem 0.8rem 0.9rem 0rem; 
          width: 2.2rem;
        }
        span{
          font-size: 2rem;
          color:#eee;
          line-height: 4rem;
        }
      }
      >img{
        width: 2.6rem;
      };
    }
  }
  >.mint-loadmore{
    height: 100%;
    overflow-y: scroll;
    >.mint-loadmore-content{
      >.activityBanner{
        >.mint-swipe{
          margin-top:9rem;
          width: 50rem;
          height:26.7rem;
          .mint-swipe-item{
            >img{
              object-fit: cover;
              width: 100%;
              height:100%;
            }
          }
        }
      }
      >.videoClass{
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
        .cont{
          display: flex;
          flex-wrap: wrap;
          padding:1rem 2.4rem 2rem;    
          .item{
            width: 8rem;
            margin-left:4.4rem;
            height: 12rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            >img{
              width: 6.66rem;
            }
            >span{
              margin-top:0.8rem;
              text-align: center;
              font-size: 1.7rem;
            }
          }
          .item:nth-child(4n+1){
            margin-left:0rem;
          }
          
        }
        
      }
      >.advertisingBanner{
        margin-top:0.7rem;
        >.mint-swipe{
          height:13.334rem;
          img{
            width: 100%;
            object-fit: cover;
          }
        }
      }
      >.loadOver{
        display: flex;
        align-items: center;
        height: 6.667rem;
        padding:0rem 1.2rem 6.67rem;
        i{
          flex: 1;
          border-top:1px solid #999999;
        }
        span{
          margin:0rem 1rem;
          font-size: 1.867rem;
          color:#999;
        }
      }
    }
  }
}
</style>