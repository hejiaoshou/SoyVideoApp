<template>
  <div class="classify">

    <div class="topTag">
      <div v-for="(tag,i) in topTags" @click="cutTag(i)">
        <span :style="i === nowTagIndex?'font-weight:600':''">{{tag}}</span>
        <i :style="i === nowTagIndex?'display:block':''"></i>
      </div>
    </div>

    <div class="recoContent" v-show="nowTagIndex===0">
       <div class="banner">
        <swipe
        :auto="4000"
        >
          <swipe-item v-for="item in bannerList">
            <img :src="item.img" alt="">
          </swipe-item>
        </swipe>
      </div>
      <classify-list
        v-for="item in classifyList"
        :classifyList="item"
      >
      </classify-list>
    </div>
    
    <div class="tagsContent" v-show="nowTagIndex===1">
      <tags></tags>
    </div>

    <bottom-nav :nowIndex="1"></bottom-nav>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import classifyList from '../../components/classify/classifyList/classifyList.vue';
import tags from '../../components/classify/tags/tags.vue';

import bottomNav from '../../components/common/bottomNav/bottomNav.vue';
export default {
  name:'classify',
  components:{
    Swipe,
    SwipeItem,
    classifyList,
    tags,
    bottomNav
  },
  data(){
    return {
      topTags:['推荐','标签'],
      nowTagIndex:0,
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
      classifyList:[
        {
          title:'推荐分类',
          list:[
            {
              name:'VIP专区',
              url:'',
              img:'./resource/images/classifyTest/vip.png'
            },
            {
              name:'电影',
              url:'',
              img:'./resource/images/classifyTest/dy.png'
            },
            {
              name:'电视剧',
              url:'',
              img:'./resource/images/classifyTest/dsj.png'
            },
            {
              name:'综艺',
              url:'',
              img:'./resource/images/classifyTest/zy.png'
            },
            {
              name:'纪录片',
              url:'',
              img:'./resource/images/classifyTest/jlp.png'
            },
            {
              name:'少儿',
              url:'',
              img:'./resource/images/classifyTest/sr.png'
            },
            {
              name:'音乐',
              url:'',
              img:'./resource/images/classifyTest/yy.png'
            },
            {
              name:'艺术',
              url:'',
              img:'./resource/images/classifyTest/ys.png'
            },
            {
              name:'漫画',
              url:'',
              img:'./resource/images/classifyTest/mh.png'
            }
          ]
        },
        {
          title:'精选分类',
          list:[
            {
              name:'VIP专区',
              url:'',
              img:'./resource/images/classifyTest/vip.png'
            },
            {
              name:'电影',
              url:'',
              img:'./resource/images/classifyTest/dy.png'
            },
            {
              name:'电视剧',
              url:'',
              img:'./resource/images/classifyTest/dsj.png'
            },
            {
              name:'综艺',
              url:'',
              img:'./resource/images/classifyTest/zy.png'
            },
            {
              name:'纪录片',
              url:'',
              img:'./resource/images/classifyTest/jlp.png'
            },
            {
              name:'少儿',
              url:'',
              img:'./resource/images/classifyTest/sr.png'
            },
            {
              name:'音乐',
              url:'',
              img:'./resource/images/classifyTest/yy.png'
            },
            {
              name:'艺术',
              url:'',
              img:'./resource/images/classifyTest/ys.png'
            },
            {
              name:'漫画',
              url:'',
              img:'./resource/images/classifyTest/mh.png'
            }
          ]
        }
      ]
    }
  },
  methods:{
    cutTag(i){
      if(i === this.nowTagIndex) return;
      this.nowTagIndex = i;
    }
  },
  mounted(){
  }
}
</script>
<style lang="less">
.classify{
  >.topTag{
    top:0px;
    z-index: 999;
    position: fixed;
    width: 45.2rem;
    background-color: #ff6600;
    padding:3rem 2.4rem 0rem;
    height:6rem;
    display: flex;
    >div{
      flex: 1;
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
  
  >.recoContent{
    margin-top:9rem;
    padding-bottom:8rem;
    >.banner{
      height: 26.667rem;
      >.mint-swipe{
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
      
    }
  }

  >.tagsContent{
    padding:9rem 2.4rem;

  }
}
</style>
