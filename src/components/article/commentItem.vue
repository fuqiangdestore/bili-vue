<template>
    <div class="commentParent">
    <div v-for="(item,index) in commentChild" :key="index">
      <div class="comment_item">
        <div class="userImg">
          <img v-if="item.userinfo && item.userinfo.user_img" :src="item.userinfo.user_img" alt />
          <img v-else src="@/assets/default_img.jpg" alt="">
        </div>
        <div class="comment_content">
          <p>
            <span v-if="item.userinfo">{{item.userinfo.name}}</span>
            <span v-else>此用户无姓名</span>
            <span>{{item.comment_date}}</span>
          </p>
          <div>
            <span>{{item.comment_content}}</span>
            <span class="publishs" @click="publishClick(item.comment_id)">回复</span>
          </div>
        </div>
      </div>
      <div><commentchild-item :commentChild="item.child"></commentchild-item></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commentchildItem',
  props: [
    "commentChild",
    "temp"
  ]
}
</script>

<style lang="less">
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
</style>