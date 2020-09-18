<template>
<div class="userinfo">
  <nav-bar></nav-bar>
  <img src="@/assets/bannerTop_new.png" class="backimg">
  <user-detail></user-detail>
</div>
  
</template>

<script>
import NavBar from '../components/common/Navbar'
import UserDetail from '../components/userComponent/userDetail'
import userArticle from '../components/userComponent/userArticle'

export default {
  components: {
    NavBar,
    UserDetail,
    userArticle
  },
  methods: {
    async userData () {
      const res = await this.$http.get() 
    }
  }
}
</script>

<style lang="less" scoped>
.userinfo{
  .backimg{
    height: 91px;
    width: 100%;
  }
}

</style>
