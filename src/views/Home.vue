<template>
  <div id="home">
    <nav-bar></nav-bar>
    <div class="categorytab">
      <div
        class="category-ico"
        @click="$router.push('/editcategory')"
      >
        <van-icon name="setting-o"></van-icon>
      </div>
      <van-tabs
        v-model="active"
        swipeable
        sticky
        animated
      >
        <van-tab
          v-for="(item, index) in category"
          :key="index"
          :title="item.title"
        >
        <van-list
          v-model="item.loading"
          :immediate-check="false"
          :finished="item.finished"
          finished-text="我也是有底线的"
          @load="onLoad"
        >
        <div class="detailparent">
          <cover
            class="detailitem"
            :detailitem="categoryitem"
            v-for="(categoryitem, categoryindex) in item.list"
            :key="categoryindex"
          >
          </cover>
        </div>
        </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/common/Navbar'
import Cover from './cover'
export default {
  data () {
    return {
      active: 0,
      category: []

    }
  },
  created () {
    this.selectCategory()
  },
  methods: {
    async selectCategory () {
      const res = await this.$http.get("/category")
      this.category = this.changeCategory(res.data)
      this.selectArticle()
    },
    changeCategory (data) {
      const category1 = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.finished = false
        item.loading = true
        item.pagesize = 10
        return item
      })
      return category1
    },
    async selectArticle() {
      const categoryitem = this.categoryItem()
      const res = await this.$http.get('/detail/' + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize
        }
      })
      categoryitem.list.push(...res.data)
      categoryitem.loading = false
      if(res.data.length < categoryitem.pagesize) {
        categoryitem.finished = true
      }
    },
    onLoad () {
      const categoryItem = this.categoryItem()
      setTimeout(() => {
        categoryItem.page += 1
        this.selectArticle()
      }, 1000)
    },
    categoryItem() {
      const categoryitem = this.category[this.active]
      return categoryitem
    }
  },
watch: {
  active() {
    const categoryitem = this.categoryItem()
    if (!categoryitem.list.length) {
      this.selectArticle()
    }
  }
},
  components: {
    NavBar,
    Cover
  }

}
</script>

<style lang="less">
#home{
  background-color: white;
}
.detailparent{
  display: flex;
  // 规定灵活的项目在必要的时候拆行或拆列
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem{
    margin: 1.3vw 0;
    width: 45%;
  }
}
.categorytab{
  position: relative;
  .category-ico{
    position: absolute;
    z-index: 5;
    right: 0;
    top: 2.8vw;
    padding: 1.389vw 2.7vw;
    background-color: white;
  }
}
</style>