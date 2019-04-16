<template>
  <div class="discover">
    
    <div class="topTag">
      <div class="tagList">
        <div class="tagItem" v-for="(tag,i) in topTags" @click="cutTag(i)">
          <span :style="i === nowTagIndex?'font-weight:600':''">{{tag}}</span>
          <i :style="i === nowTagIndex?'display:block':''"></i>
        </div>
      </div>
      <span class="search"></span>
    </div>
    
    <div class="content">
      <tab-container 
        :swipeable="swipeSwitch"
        v-model="nowTagIndex"
        >
        <tab-container-item v-for="(item,i) in contentList" :id="i">
          <content-item @chlidTransmit="topNavSwitch" :contentItem="item"></content-item>
        </tab-container-item >
      </tab-container>
    </div>
    
    <bottom-nav :nowIndex="2"></bottom-nav>

  </div>
</template>
<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import contentItem from '../../components/discover/contentItem/contentItem.vue';
import bottomNav from '../../components/common/bottomNav/bottomNav.vue';
export default {
  name:'discover',
  components:{
    TabContainer,
    TabContainerItem,
    contentItem,
    bottomNav
  },
  data(){
    return{
      topTags:['推荐','电视剧','少儿','动漫','电影','新秀','推荐','电视剧','少儿','动漫','电影','新秀'],
      nowTagIndex:0,
      swipeSwitch:true,
      contentList:[
        {
          swipe:[
            {
              url:'',
              img:'./resource/images/homeTest/swipe0.png',
              title:'我是标题0我是标题0我是标题0我是标题0我是标题0我是标题0'
            },
            {
              url:'',
              img:'./resource/images/homeTest/swipe0.png',
              title:'我是标题1我是标题1我是标题1我是标题1我是标题1我是标题1'
            }
          ]
        },
         {
          swipe:[
            {
              url:'',
              img:'./resource/images/homeTest/swipe0.png',
              title:'我是标题2我是标题2我是标题2我是标题2我是标题2我是标题2'
            },
            {
              url:'',
              img:'./resource/images/homeTest/swipe0.png',
              title:'我是标题3我是标题3我是标题3我是标题3我是标题3我是标题3'
            }
          ]
        }
      ]
    }
  },
  methods:{
    topNavSwitch(ret){
      this.swipeSwitch = ret.topNavSwitch;
    }
  },
  created(){
  },
  watch: {
    //监控顶部菜单变动
    nowTagIndex: function (newval, oldval) {
      //设置顶部菜单滚动条位置
      (()=>{
        let tagListDom = document.getElementsByClassName('tagList')[0];
        let itemTagWidth = 8.3*appInfo.clientUnitWidth;
        if(newval>2&&(this.topTags.length-newval)>2){
          let nowScrollLeft = (newval-2)*itemTagWidth;
          tagListDom.scrollLeft = nowScrollLeft;
        }else if(newval===2){
          tagListDom.scrollLeft = 0;
        }
      })();
    }
  },
}
</script>
<style lang="less"> 
.discover{
  height: 100%;
  >.topTag{
    top:0px;
    z-index: 999;
    position: fixed;
    width: 100%;
    background-color: #ff6600;
    padding-top:3rem;
    height:6rem;
    display: flex;
    >.tagList{
      display: flex;
      overflow-x: scroll;
      >.tagItem{
        min-width: 8.3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:1.5rem 0rem 0.8rem;
        >span{
          font-size: 2.133rem;
          color:#fff;
          line-height: 2.8rem;
          margin-bottom:0.5rem;
        }
        >i{
          height: 0.4rem;
          width: 2.5rem;
          background-color: #fff;
          border-radius: 1rem;
          display: none;
          margin-bottom:0rem;        
        }
      }
    }
    >.search{
      min-width: 8.5rem;
      height: 100%;
      background:url('./icons/searchIcon.png') no-repeat 50% 50%;
      background-size: 2.8rem 3rem;
    }
  }
  >.content{
    background-color:#fff;
    box-sizing: border-box;
    height: 100%;
    padding:9rem 0rem 6.667rem;
    overflow: hidden;
    >.mint-tab-container{
      height: 100%;
      >.mint-tab-container-wrap{
        height: 100%;
      }
    }
  }
}
</style>
