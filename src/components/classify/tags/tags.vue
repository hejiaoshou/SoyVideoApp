<template>
  <div class="tags">
    <div class="search">
      <search></search>
    </div>
    <div class="bigTags">
      <span :class="{nowBigTag:nowBigTagsIndex === i}" v-for="(item,i) in bigTags" @click="selectBigTag(i)">{{item.name}}</span>
    </div>
    <div class="smallTags">
      <div :class="{nowSmallTag:nowSmallTagIndex.indexOf(i)>-1}" v-for="(item,i) in nowSmallTags" @click="selectSmallTag(i)">
        <span>{{item}}</span>
        <img src="./icons/close.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import search from '../../common/search/search.vue';
export default {
  name:'tags',
  components:{
    search
  },
  data(){
    return{
      bigTags:[
        {
          name:'全部',
          smallTags:[]
        }
      ],
      nowBigTagsIndex:0,
      nowSmallTags:[],
      nowSmallTagIndex:[]
    }
  },
  created(){
    let bigTags = [];
    for(let i=0;i<8;i++){
      bigTags[i] = {
        name:`大标题${i}`,
        smallTags:[]
      }
      for(let a=0;a<3;a++){
        bigTags[i].smallTags.push(`${i}小标题${a}`);
        this.bigTags[0].smallTags.push(`${i}标${a}`);
      }
    }
    this.bigTags = this.bigTags.concat(bigTags);
    this.bigTags = this.bigTags.concat({name:'重置'});
    this.nowSmallTags = this.bigTags[this.nowBigTagsIndex].smallTags;
  },
  methods:{
    selectBigTag(i){
      if(this.nowBigTagsIndex === i) return;
      if(i === this.bigTags.length-1){
        this.nowSmallTagIndex = [];
      }else{
        this.nowBigTagsIndex = i;
        this.nowSmallTags = this.bigTags[this.nowBigTagsIndex].smallTags;
      }
    },
    selectSmallTag(i){
      if(this.nowSmallTagIndex.indexOf(i)>-1){
        this.nowSmallTagIndex.splice(this.nowSmallTagIndex.indexOf(i), 1);
      }else{
        this.nowSmallTagIndex.push(i);
      }      
    }
  }
}
</script>
<style lang="less">
.tags{
  >.search{
    margin-top:2rem;
  }
  >.bigTags{
    margin-top:2rem;
    display: flex;
    flex-wrap: wrap;
    >span{
      width: 10.7rem;
      line-height:3.6rem;
      text-align: center;
      color:#666666;
      font-size: 1.8rem;
      margin:0.6rem 0rem;
      margin-left:0.8rem;
      background-color: #fff;
      border-radius: 1.7rem;
    }
    >.nowBigTag{
      background-color:#FF6600;
      color:#fff;
    }
    >span:nth-child(4n+1){
      margin-left:0rem;
    }
  }
  >.smallTags{
    margin-top:2rem;
    font-size: 2rem;
    display: flex;
    flex-wrap: wrap;
    >div{
      width: 10.7rem;
      line-height:3.6rem;
      text-align: center;
      font-size: 1.8rem;
      color:#666666;
      margin:0.9rem 0rem;
      margin-left:0.8rem;
      display: flex;
      align-items: center;
      border-radius: 1.7rem;
      height: 3.6rem;
      >span{
        flex:1;
      }
      >img{
        width: 1.2rem;
        height: 1.2rem;
        display: none;
        margin:0rem 0.5rem;
      }
    }
    >.nowSmallTag{
      background-color: #fff;
      overflow: hidden;
      >span{
        margin-left:0.5rem;
      }
      >img{
        display: block;
      }
    }
    >div:nth-child(4n+1){
      margin-left:0rem;
    }
  }
}
</style>


