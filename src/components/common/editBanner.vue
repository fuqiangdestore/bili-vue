<template>
  <div id="editBanner">
    <span>{{left}}</span>
    <span><slot name="right"></slot></span>
  </div>
</template>

<script>
export default {
  props: [
    'left',
    'value'
  ],
  data() {
    return {

    }
  }

}
</script>

<style lang="less" scoped>
#editBanner{
  display: flex;
  margin: 10px;
  background: white;
  span:nth-child(1){
    flex: 1;

  }
}
</style>