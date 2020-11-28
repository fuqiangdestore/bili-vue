<template>
  <div class="userdetail">
    <div>
      <div class="user_img">
        <img :src="userInfo.user_img" alt="" v-if="userInfo.user_img">
        <img src="@/assets/default_img.jpg" v-else alt="">
      </div>
      <div class="user_edit">
        <div>
          <p>
            <span>0</span>
            <span class="user_text">粉丝</span>
          </p>
          <p>
            <span>54</span>
            <span class="user_text">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')">
          <div class="user_editBtn">编辑资料</div>
        </div>
      </div>
    </div>
    <div>
      <h2>{{userInfo.name}}</h2>
      <p v-if="userInfo.user_desc">
        {{userInfo.user_desc}}
      </p>
      <p v-else>
        这个人很神秘，什么都没有写
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userInfo']
}
</script>

<style lang="less">
.userdetail{
  background-color: white;
  padding: 2vw 3.3vw;
  > div:nth-child(1) {
    display: flex;
    .user_img{
      margin-right: 5.5vw;
      img{
        height: 23.611vw;
        width: 23.611vw;
        border-radius: 50%;       
      }
    }
    .user_edit {
      flex: 1;
      div:nth-child(1) {
        display: flex;
        p {
          display: flex;
          flex: 1;
          // 横轴对齐
          justify-content: center;
          // 纵轴对齐
          align-items: center;
          // 垂直排列
          flex-direction: column;
          font-size: 3.61vw;
          .user_text {
            color: #aaa;
          }
        }
        p:nth-child(1),
        p:nth-child(2) {
          border-right: 0.278vw solid #ccc;
        }
      }
      div:nth-child(2) {
        padding: 0.5vw 2.7vw;
        .user_editBtn {
          border: 0.278vw solid #fb7afb;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          border-radius: 1.1vw;
        }
      }
    }
  }
  div:nth-child(2) {
    h2 {
      // margin四个值 是从上开始
      // 都是从上面开始
      margin: 2.7vw 0 0.8vw 0;
      font-weight: 400;
    }
    p {
      padding: 0;
      margin: 2.7vw 0 0 0;
      color: #999;
    }
  }
}

</style>