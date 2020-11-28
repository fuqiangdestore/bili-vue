<template>
<div @click="pathPush" v-if="detailitem">
  <div class="detailItem">
    <div class="imgparent">
      <img :src="detailitem.img" style="width: 100%; height: 27.78vw;">
      <div class="bottom">
        <div class="icon-play2">
          <span class="video">123</span>
        </div>
        <div class="icon-file-text">
          <span
            class="comment"
          >
          {{!detailitem.commentlen ? 66 : detailitem.commentlen}}
          </span>
        </div>
      </div>
      <p>{{detailitem.name}}</p>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  props: [
    'detailitem'
  ],
  methods: {
    pathPush () {
      this.$router.push(`/article/${this.detailitem.id}`)
    }
  }
}
</script>

<style lang="less">
.detailItem{
  p{
    font-size: 3.3vw;
    padding: 1vw 0;
  }
  .imgparent{
    position: relative;
    .bottom{
      padding: 0 2.7vw;
      margin-bottom: 1.3vw;
      position: absolute;
      bottom: 4vw;
      background: linear-gradient(0deg,rgba(0,0,0,.85),transparent);
      display: flex;
      justify-content: space-between;
      color: white;
      left: 0;
      right: 0;
    }
  }
}

</style>