<template>
  <div class="userdetail">

  </div>
</template>

<script>
import NavBar from '../common/Navbar'
export default {
  components: {
    NavBar,
  },
  mounted () {
    this.$http.get()
  }

}
</script>

<style lang="less">
.userdetail{
}

</style>