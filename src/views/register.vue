<template>
  <div>
    <div>注册</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        name: "fq",
        username: "fq",
        password: '123456'
      }
    }
  },
  methods: {
    async AjaxInsert () {
      const res = await this.$http.post('/register', this.model)
      this.$msg.fail(res.data.msg)
    }
  },
  created () {
    this.AjaxInsert()

  }
 
}
</script>

<style>

</style>