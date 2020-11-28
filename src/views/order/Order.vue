<template>
  <div id="order">
    <nav-bar></nav-bar>
    <div>
      <span>
        123
      </span>
    </div>
    <input type='text' v-model='value'>  
    <button @click="initData()"></button>
    <ul>
      <li
        v-for="(item, index) in person"
        :key="index"
      >
      {{item}}
      </li>
    </ul>
    </div>
</template>

<script>
import NavBar from "../../components/common/Navbar";
let arr = [1,1,2,3,4]
// let b =a.indexOf(1)
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
            console.log(res,arr[i])
        }
    }
    return res
}
console.log(unique(arr));

        const throttle = (fn, delay) => {
            /**
             * @param [Function] fn 需要使用防抖的函数
             * @param [Number] delay 毫秒，防抖期限值
            */
            let timer = null
            return () => {
                if (!timer) {
                    timer = setTimeout(() => {
                        fn()
                        timer = null
                    }, delay)
                }
            }
        }

        const showTop = () => {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            console.log('当前位置：' + scrollTop)
        }
        window.onscroll = throttle(showTop, 1000)

function debounce(func, wait=2000){ //可以放入项目中的公共方法中进行调用（鹅只是省事）
 let timeout;
 return function(event){
  clearTimeout(timeout)
  timeout = setTimeout(()=>{
   func.call(this, event)
  },wait)
 }
}
export default {
  data() {
    return {
      active: 'order',
      value: '',
      list: [
        {
          a: '123'
        },
        {
          a: '234'
        },
        {
          b: '345'
        },
      ],
      person : {
        name: '张三',
        age: 18,
        66: '66',
        2: '2'
      }
    }
  },
  methods: {
    iptClick: debounce(function(event){
      console.log(this.value)
    }),
    initData() {
      console.log(123)
      setTimeout(() => {
        this.list.push(Math.random())
      },500)
      console.log(this.list[0])
    }
  },
  mounted() {
    this.initData()

  },
  components: {
    NavBar,
  }
};
</script>

<style lang="less" scoped>
#order{
  background: white;
  div:nth-child(2){
    width: 100%;
    height: 500px;
    border: 2px red solid;
    position: relative;
    span{
      width: 100px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      background: yellow;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%)
    }
  }
  ul{
    // display: flex;
  }
  button{
  width: 50px;
  height: 50px;
}
}
</style>