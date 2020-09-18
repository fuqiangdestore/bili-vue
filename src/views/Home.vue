<template>
  <div id="home">
    <nav-bar></nav-bar>
    <div class="categorytab">
      <div class="category=icon">
        <van-icon name="setting-o" />
      </div>
      <van-tabs v-model="active" swipeable sticky animated>
        <van-tab v-for="(item, index) in category"
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
              :detilitem='categoryitem'
              v-for="(category, categoryindex) in item.list"
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
import NavBar from "@/components/common/Navbar.vue";
// import cover from "./cover";

export default {
  data() {
    return {
      category: [],
      active: 0
    };
  },
  components: {
    NavBar,
  },
  created () {
    this.selectCategpry()
  },
  methods: {
    async selectCategpry() {
      const res = await this.$http.get('/category')
      this.category = this.changeCategory(res.data)
      this.selectArticle()
    },
    changeCategory (data) {
      const category1 = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.finished = false;
        item.loading = true;
        item.pagesize = 10;
        // console.log(item[0])
        return item;
      })
      // console.log(category1)
      return category1
    },
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize
        }
      });
      categoryitem.list.push(...res.data)
      categoryitem.loading = false;
      if ( res.data.length < categoryitem.pagesize) {
        categoryitem.finished = true;
      }
    },
    onLoad () {
      const categoryitem = this.categoryitem();
      setTimeout(() => {
        categoryitem.page += 1;
        this.selectArticle();
      }, 1000)
    },
    categoryItem() {
      const categoryitem = this.category[this.active];
      return categoryitem;
    }
  },

  watch: {
    active() {
      const categoryitem = this.categoryItem();
      if (!categoryitem.list.length) {
        this.selectArticle();
      }
    }
  }

}
</script>

<style lang='less'>
#home{
  background-color: white;
}
.detailparent{
  display: flex;
  // wrap	规定灵活的项目在必要的时候拆行或拆列。
  flex-wrap: wrap;
  // 使用 align-content 属性对齐交叉轴上的各项（垂直）
  // justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
  justify-content: space-around;
}

</style>