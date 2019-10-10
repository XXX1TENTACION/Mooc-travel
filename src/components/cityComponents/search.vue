<template>
  <div class="search">
    <input type="text" class="inp" placeholder="请输入城市名或拼音" v-model="keyword" />
    <div class="search-content" ref="searchContent" v-show="keyword">
      <ul class="content-wrapper">
        <li
          class="content-item border-bottom"
          v-for="item in searchList"
          :key="item.id"
          @click="changeCity(item.name)"
        >{{item.name}}</li>
        <li class="content-item border-bottom" v-if="hasData">没有找到该城市</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "search",
  props: {
    cities: {
      type: Object
    }
  },
  data() {
    return {
      keyword: "",
      searchList: []
    };
  },
  methods: {
    ...mapMutations(["changeCityName"]),
    changeCity(cityName) {
      this.changeCityName(cityName);
      this.$router.push("/");
    }
  },
  computed: {
    hasData() {
      return !this.searchList.length;
    }
  },
  watch: {
    //监听输入框文本的变化，在cities数据中找出相对应的城市显示
    keyword(newValue) {
      let result = [];
      if (!newValue) {
        this.searchList = [];
        return;
      }
      for (let i in this.cities) {
        this.cities[i].forEach(item => {
          if (
            item.spell.indexOf(newValue) != -1 ||
            item.name.indexOf(newValue) != -1
          ) {
            result.push(item);
          }
        });
      }
      this.searchList = result;
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.searchContent);
  }
};
</script>
<style lang='scss' scoped>
@import "~css/variable.sass";
.search {
  height: 0.72rem;
  background-color: $bgColor;
  padding: 0 0.1rem;
  margin-top: -1px;
  .inp {
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    border-radius: 0.06rem;
    text-align: center;
    padding: 0 0.1rem;
    color: #666;
  }
  .search-content {
    position: absolute;
    top: 79px;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    background-color: #eee;
    z-index: 99;
    .content-item {
      line-height: 0.62rem;
      padding-left: 0.2rem;
      color: #666;
      background-color: #fff;
    }
  }
}
</style>