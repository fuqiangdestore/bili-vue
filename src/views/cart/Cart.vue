<template>
  <div>
    <nav-bar></nav-bar>
    <div>cart</div>
  </div>
</template>

<script>
import NavBar from "../../components/common/Navbar";

export default {
  data() {
    return {
      active: 'cart'
    };
  },
  components: {
    NavBar,
  }
};
</script>

<style>
</style>