<template>
    <div class="comment_title">
      <div>
        <span>评论</span>
        <span>({{datalength}})</span>
      </div>
      <div>
        <img class="userimg" src="@/assets/default_img.jpg" alt="">
        <input type="text" placeholder="弹射出你内心的世界">
        <button>发表</button>
      </div>
    </div>
</template>

<script>
export default {
  props: [
    'datalength'
  ],
  data() {
    return {

    }
  }

}
</script>


<style lang="less" scoped>
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