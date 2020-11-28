<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/set" badge="20">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>