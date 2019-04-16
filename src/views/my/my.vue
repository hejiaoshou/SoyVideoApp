<template>
  <div class="my">
    <!-- 顶部标题 -->
    <div class="topTitle">我的</div>
    <!-- 主题内容 -->
    <div class="main">
      <!-- 用户信息卡片 -->
      <div class="userInfoCard">
        <div class="interior">
          <div class="mainInfo">
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1054598549,1073845993&fm=111&gp=0.jpg" alt="" @click="routerTo('/login')">
            <div class="uesrInfo">
              <span class="name">王景萩</span>
              <span class="phone">18033441984</span>
            </div>
            <div class="viewTime">
              <span>10/10</span>
              <span>今日剩余观影次数</span>
            </div>
          </div>
          <span class="but">获取更多次数</span>
        </div>
      </div>
      <!-- 广告banner -->
      <div class="adverBanner">
        <swipe
          :auto="4000"
          >
          <swipe-item v-for="item in bannerList">
            <img :src="item.img" alt="">
          </swipe-item>
        </swipe>
        <span>我是广告语我是光我是广告语我是光我是广告语我是光我是广告语我是光我是广告语我是光</span>
      </div>
      <!-- 功能菜单 -->
      <div class="menus">
        <div class="menuItem" v-for="(item,i) in menus">
          <img :src="item.menuIcon" alt="">
          <span>{{item.name}}</span>
        </div>
      </div>
      <!-- 浏览记录 -->
      <div class="record">
        <div class="itemRecord" v-for="(item,i) in records">
          <div class="name">
            <i></i>
            <span>{{item.name}}</span>
          </div>
          <div class="mainContent">
            <div class="item" v-for="(itemContent,index) in item.list">
              <img :src="itemContent.img" alt="">
              <span>{{itemContent.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 注销按钮 -->
      <span class="but">
        退出账号
      </span>
    </div>
    <!-- 主菜单 -->
    <bottom-nav :nowIndex="3"></bottom-nav>
  </div>
</template>
<script>
import {Swipe,SwipeItem} from 'mint-ui';
import bottomNav from '../../components/common/bottomNav/bottomNav.vue';
export default {
  name:'my',
  components:{
    Swipe,
    SwipeItem,
    bottomNav
  },
  data(){
    return{
      bannerList:[
        {
          img:'./resource/images/classifyTest/classify.png',
          url:''
        },
        {
          img:'./resource/images/classifyTest/classify.png',
          url:''
        },
        {
          img:'./resource/images/classifyTest/classify.png',
          url:''
        },
        {
          img:'./resource/images/classifyTest/classify.png',
          url:''
        },
        {
          img:'./resource/images/classifyTest/classify.png',
          url:''
        },
        {
          img:'./resource/images/classifyTest/classify.png',
          url:''
        }
      ],
      menus:[
        {
          name:'我的推广',
          menuIcon:'./resource/images/myTest/tg.png',
          url:''
        },
        {
          name:'意见反馈',
          menuIcon:'./resource/images/myTest/yj.png',
          url:''
        },
        {
          name:'消息中心',
          menuIcon:'./resource/images/myTest/xx.png',
          url:''
        },
        {
          name:'交流群组',
          menuIcon:'./resource/images/myTest/jl.png',
          url:''
        },
        {
          name:'交流群组',
          menuIcon:'./resource/images/myTest/jl.png',
          url:''
        },
        {
          name:'我的推广',
          menuIcon:'./resource/images/myTest/tg.png',
          url:''
        },
        {
          name:'意见反馈',
          menuIcon:'./resource/images/myTest/yj.png',
          url:''
        },
        {
          name:'消息中心',
          menuIcon:'./resource/images/myTest/xx.png',
          url:''
        },
        {
          name:'交流群组',
          menuIcon:'./resource/images/myTest/jl.png',
          url:''
        }
      ],
      records:[
        {
          name:'历史记录',
          list:[
            {
              img:'./resource/images/classifyTest/vip.png',
              name:'我爱男保姆'
            },
            {
              img:'./resource/images/classifyTest/dy.png',
              name:'我不是精英'
            },
            {
              img:'./resource/images/classifyTest/vip.png',
              name:'我爱男保姆'
            },
            {
              img:'./resource/images/classifyTest/dy.png',
              name:'我不是精英'
            },
            {
              img:'./resource/images/classifyTest/vip.png',
              name:'我爱男保姆'
            },
            {
              img:'./resource/images/classifyTest/dy.png',
              name:'我不是精英'
            }
          ]
        },
        {
          name:'缓存记录',
          list:[
            {
              img:'./resource/images/classifyTest/vip.png',
              name:'我爱男保姆'
            },
            {
              img:'./resource/images/classifyTest/dy.png',
              name:'我不是精英'
            },
            {
              img:'./resource/images/classifyTest/vip.png',
              name:'我爱男保姆'
            },
            {
              img:'./resource/images/classifyTest/dy.png',
              name:'我不是精英'
            },
            {
              img:'./resource/images/classifyTest/vip.png',
              name:'我爱男保姆'
            },
            {
              img:'./resource/images/classifyTest/dy.png',
              name:'我不是精英'
            }
          ]
        }
      ],
    }
  },
  methods:{
    routerTo(url){
      this.$router.push(url)
    }, 
  },
  created(){
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.setStatusBar('into');
    })
  },
  watch:{
    //离开页面时设置状态栏字体颜色
    $route(to,from){
      if(from.path === '/my'){
        this.setStatusBar();
      }
    }
  }
}
</script>
<style lang="less">
.my{
  height: 100%;
  >.topTitle{
    background-color: #fff;
    padding-top: 3rem;
    height: 6rem;
    color:#333;
    font-size: 2.4rem;
    line-height: 6rem;
    text-align: center;
    top: 0px;
    z-index: 999;
    position: fixed;
    width: 100%;
  }
  >.main{
    height: 100%;
    overflow-y: scroll;
    >.userInfoCard{
      margin-top:9rem;
      padding:1.4rem 2.4rem;
      background-color:#fff;
      >.interior{
        height: 17rem;
        background-color:#FF6600;
        border-radius: 1.2rem;
        >.mainInfo{
          padding:2rem;
          display: flex;
          height:7.5rem;
          >img{
            width: 7.5rem;
            height:7.5rem;
            border-radius:50%;
            object-fit: cover;
            background-color: #fff;
          }
          >.uesrInfo{
            margin-left:2rem;
            width: 15.5rem;
            display: flex;
            flex-direction: column;
            >.name,>.phone{
              flex: 1;
              color:#fff;
              display: flex;
              align-items: center;
            }
            >.name{
              font-size: 2.2rem;
            }
            >.phone{
              font-size: 1.9rem;
              letter-spacing: 0.05rem;
            }
          }
          >.viewTime{
            display: flex;
            flex-direction: column;
            >span{
              flex: 1;
              color:#fff;
              font-size: 1.8rem;
              display: flex;
              align-items: center;
            }
          }
        }
        >.but{
          width: 38rem;
          height: 4rem;
          background-color: rgba(0,0,0,0.2);
          display: block;
          border-radius: 2rem;
          margin:0 auto;
          line-height: 4rem;
          text-align:center;
          color:#fff;
          font-size: 2rem;
        }
      }
      
    }
    >.adverBanner{
      padding:0rem 2.4rem 1rem;
      background-color: #fff;
      >.mint-swipe{
        border-radius: 1.2rem;
        height: 22rem;
        overflow: hidden;
        .mint-swipe-item{
          >img{
            width:100%;
            object-fit: cover;
          }
        }
        >.mint-swipe-indicators{
          >.mint-swipe-indicator{
            width: 1.1rem;
            height: 1.1rem;
            background-color: #fff;
            opacity:0.9;
            border-radius: 1.1rem;
          }
          >.is-active{
            width: 2rem;
          }
        }
      }
      >span{
        display: block;
        font-size: 2rem;
        color: #333;
        line-height: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }
    }
    >.menus{
      padding:0rem 1.4rem;
      background-color:#fff;
      margin-top:1.35rem;
      display:flex;
      flex-wrap: wrap;
      >.menuItem{
        box-sizing: border-box;
        padding:2.5rem 2rem;
        display: flex;
        flex-direction: column;
        width: 25%;
        justify-content: center;
        align-items: center;
        >img{
          width: 4rem;
          margin-bottom:1.6rem;
        }
        >span{
          color:#666;
          font-size: 1.7rem;
        }
      }
    }
    >.record{
      >.itemRecord{
        margin-top:1.35rem;
        background-color: #fff;
        padding:0rem 2.4rem;
        >.name{
          height: 6rem;
          flex: 1;
          display: flex;
          align-items: center;
          >i{
            width: 0.4rem;
            height: 2.66rem;
            background-color: #ff6600;
          }
          >span{
            margin-left: 0.7rem;
            flex: 1;
            font-size: 2.1rem;
            font-weight: 600;
            color: #ff6600;
          }
        }
        >.mainContent{
          display: flex;
          flex-wrap:wrap;
          width: 100%;
          overflow: hidden;
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
    }
    >.but{
      margin:3.7rem 2.4rem 10.7rem;
      display: block;
      font-size: 2.27rem;
      color:#fff;
      background-color: #FF6600;
      border-radius: 3rem;
      line-height: 6rem;
      text-align:center;
    }
  }
}
</style>
