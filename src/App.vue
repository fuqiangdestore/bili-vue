<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"></router-view>
    </keep-alive>
      <router-view v-if="!$route.meta.keepalive"></router-view>
      <tabbar-foot></tabbar-foot>
  </div>
</template>

<script>
import TabbarFoot from './components/common/TabbarFoot'
export default {
  name: 'App',
  components: {
    TabbarFoot
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}
p{
  margin: 0;
}
</style>
