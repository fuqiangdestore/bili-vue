<template>
  <div>
    <NavBar></NavBar>
    <div >
      <edit-banner left="头像">
        <img :src="1" slot="right">
        <!-- <img src="../assets/default_img.jpg" slot="right"> -->
      </edit-banner>
    </div>
    <edit-banner left="昵称">
      <span slot="right">{{model.name}}</span>
    </edit-banner>
  </div>
</template>

<script>
import NavBar from '../components/common/Navbar'
import EditBanner from '../components/common/EditBanner'
export default {
  data() {
    return {
      model: null,
      edit: ['头像','昵称','账号','性别','个签']
    }
  },
  created() {
    this.getUserData()
    
  },
  methods: {
    async getUserData() {
      const res = await this.$http.get('/user/' + localStorage.getItem("id"))
      this.model = res.data[0]
    }
  },
  components: {
    NavBar,
    EditBanner
  }
}
</script>

<style>

</style>