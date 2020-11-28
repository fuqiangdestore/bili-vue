<template>
<div class="userinfo">
  <nav-bar></nav-bar>
  <img src="@/assets/bannerTop_new.png" class="backimg">
  <user-detail :userInfo="model"></user-detail>
  <user-article></user-article>
</div>
  
</template>

<script>
import NavBar from '../components/common/Navbar'
import UserDetail from '../components/userComponent/userDetail'
import userArticle from '../components/userComponent/userArticle'

export default {
  data () {
    return {
      model: {}
    }
  },
  components: {
    NavBar,
    UserDetail,
    userArticle
  },
  methods: {
    async userData () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
    }
  },
  created () {
    this.userData()
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
