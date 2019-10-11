<template>
  <div>
    <ul class="alphabet">
      <li
        class="alphabet-item"
        v-for="item of letters"
        :key="item"
        @click="postInfo"
        @touchstart.prevent="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        :ref="item"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "alphabet",
  props: {
    cities: {
      type: Object
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    //计算A字母距离搜索栏下边框的高度
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    postInfo(e) {
      //向父组件传递，点击的字母
      this.$emit("change", e.target.innerHTML);
    },
    //使用touchStatus保证下面三个函数按先后顺序执行
    touchStart() {
      this.touchStatus = true;
    },
    touchMove(e) {
      if (this.touchStatus) {
        //函数防抖
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          //计算当前手指滑动到的字母距离搜索栏下边框的高度
          const touchY = e.touches[0].clientY - 79;
          //计算该字母的index
          const index = Math.floor((touchY - this.startY) / 20);
          if ((index >= 0 && index < this, this.letters.length)) {
            //触发city.vue页面中的change事件，把手指滑动停留的字符传过去
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    touchEnd() {
      this.touchStatus = false;
    }
  },
  computed: {
    //把首字母组织成数组['A','B'.....]
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "~css/variable.sass";
.alphabet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 79px;
  bottom: 0;
  width: 0.4rem;
  .alphabet-item {
    line-height: 0.4rem;
    color: $bgColor;
    text-align: center;
  }
}
</style>