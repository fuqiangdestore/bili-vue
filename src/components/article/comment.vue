<template>
  <div id="commentPar">
    <div v-for="(item, index) in commentList" :key="index">
      <div class="comment_item">
        <img src="../../assets/default_img.jpg" alt />
        <div class="comment_content">
          <p>
            <span>{{item.userinfo.name}}</span>
            <span>{{item.comment_date}}</span>
          </p>
          <div>
            <span>{{item.comment_content}}</span>
            <span>回复</span>
          </div>
        </div>
      </div>
      <div style="padding-left: 8vw;"><comment-item :commentChild="item.child"></comment-item></div>
    </div>
  </div>
</template>

<script>
import CommentItem from './commentItem'
export default {
  data() {
    return {
      commentList: null
    };
  },
  methods: {
    async commentData() {
      const res = await this.$http("/comment/" + this.$route.params.id);
      if(res.data) {
        this.$emit('lengthselect', res.data.length)
      }
      this.commentList = this.changeCommentData(res.data);
      console.log('改造前',res.data)
    },
    changeCommentData(data) {
      function fn(temp) {
        let arr1 = []
        for(var i = 0; i < data.length; i++) {
          if(data[i].parent_id == temp) {
            arr1.push(data[i])
            data[i].child = fn(data[i].comment_id);
          }
        }
        return arr1
        console.log('改造后的数据',arr1)
      }
      return fn(null)
    }
  },
  created() {
    this.commentData();
  },
  components: {
    CommentItem
  }
};
</script>

<style lang="less" scoped>
#commentPar {
  width: 100%;
  background-color: white;
  .comment_item {
    padding: 2vw;
    display: flex;
    img {
      width: 25px;
      height: 25px;
      margin: 0 10px;
    }
    .comment_content {
      flex: 1;
      p {
        font-size: 3.6vw;
        margin-bottom: 1.3vw;
        display: flex;
        color: #555;
        justify-content: space-between;
      }
      div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        span:nth-child(2) {
          color: red;
        }
      }
    }
  }
}
</style>