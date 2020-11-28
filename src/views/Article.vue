<template>
  <div>
    <nav-bar></nav-bar>
    <div class="detailinfo">
      <div class="video">
        <video controls="controls" :src="model.content"></video>
      </div>
      <div class="detailinfoText">
        <div>
          <span>活动</span>
          <span>{{model.name}}</span>
        </div>
        <div>
          <span>{{model.userinfo.name}}</span>
          <span>13万观看次数</span>
          <span>2000弹幕</span>
          <span>04:23</span>
        </div>
        <div>
          <p @click="collectionClick">
            <span class="icon-star-full"></span>
            <span>收藏</span>
          </p>
          <p @click="subscriptClick">
            <span class="icon-bubble"></span>
            <span>关注</span>
          </p>
          <p>
            <span class="icon-redo2"></span>
            <span>分享</span>
          </p>
        </div>
      </div>
    </div>
    <div class="recommend">
      <cover
       v-for="(item, index) in recommendList"
       :key="index"
       :detailitem="item"
       class="recommendItem"
      ></cover>
    </div>
    <comment-title :datalength="length"></comment-title>
    <comment @lengthselect="len => length = len"></comment>
  </div>
</template>

<script>
import NavBar from '../components/common/Navbar'
import Cover from '../views/cover'
import Comment from '../components/article/comment'
import CommentTitle from '../components/article/commentTitle'
export default {
  data() {
    return {
      arr: [1,2,3],
      model: {
        userinfo:{}
      },
      recommendList: [],
      length: null
    }
  },
  methods: {
    async articleData() {
      const res = await this.$http.get('/article/' + this.$route.params.id)
      this.model = res.data[0];
      const per = window.performance
      console.log(per)
      setTimeout(() => {
        this.testFun()
      }, 1000);
    },
    testFun() {
      const data = new Promise()

    },
    async recommendData() {
      const res = await this.$http.get('/commend')
      this.recommendList = res.data;
      let nums = [2,0,2,1,1,0];
      this.changeArr(nums)
    },
    changeArr(nums) {
    },
    collectionClick() {

    },
    subscriptClick() {

    },
  },
  created() {
    this.articleData()
    this.recommendData()
  },
  components: {
    NavBar,
    Cover,
    Comment,
    CommentTitle
  }
}
</script>

<style lang="less" scoped>
  .detailinfo{
    background-color: white;
    .video{
      width: 100%;
      video{
        width: 100%;
      }
    }
    .detailinfoText{
      div:nth-child(1){
        padding: 10px;
        span:nth-child(1) {
          padding: 0 2.9vw;
          background-color: #f4f4f4;
          color: #fb7299;
          border-radius: 2.7vw;
          margin-right: 10px;
        }
      }
      div:nth-child(2) {
        padding: 8px 12px;
        span{
          color: #aaa;
          font-size: 3.3vw;
        }
        span:nth-child(1) {
          color: black;
          font-size: 4vw;
          margin-right: 10px;
        }
      }
      div:nth-child(3) {
        padding: 0 2.7vw;
        display: flex;
        p{
          display: flex;
          align-items: center;
          color: #757575;
          margin-right: 10px;
          span:nth-child(1) {
            font-size: 21px;
            margin-right: 3px;
          }
         span:nth-child(2) {
           font-size: 13px
          }
        }
      }
    }
  }
  .recommend{
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    .recommendItem{
      width: 45%;
      margin:10px 8px;
    }
  }
.comment_title{
  background-color: white;
  padding: 10px;
  div:nth-child(1) {
    span:nth-child(2){
      color: #aaa;
      margin-left: 10px;
    }
  }
  div:nth-child(2){
    padding: 1.333vw 2vw;
    display:flex;
    img{
      width: 6.667vw;
      height: 6.667vw;
      border-radius: 50%;
    }
    input{
      outline: none;
      border: 0;
      background-color: #f4f4f4;
      border-radius: 3.6vw;
      font-size: 3.3vw;
      padding: 0 3vw;
      margin:0 3vw;
    }
    button{
        outline: none;
        border: 0;
        border-radius: 3.333vw;
        background: #fb7299;
        color: white;
        font-size: 3.333vw;
        padding: 0 4.167vw;
    }

  }
}
</style>