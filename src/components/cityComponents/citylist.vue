<template>
  <div class="citylist" ref="citylist">
    <div class="citylist-wrapper">
      <div class="location">
        <div class="title border-topbottom">当前城市</div>
        <div class="list">
          <div class="city-name">{{city}}</div>
        </div>
      </div>
      <div class="hotcity">
        <div class="title border-topbottom">热门城市</div>
        <div class="list">
          <div
            class="city-name"
            v-for="item in hotCities"
            :key="item.id"
            @click="changeCity(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="item" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-wrapper">
          <li
            class="name border-bottom"
            v-for="city in item"
            :key="city.id"
            @click="changeCity(city.name)"
          >{{city.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "citylist",
  props: {
    cities: {
      type: Object
    },
    hotCities: {
      type: Array
    },
    letter: {
      type: String
    }
  },
  data() {
    return {};
  },
  mounted() {
    this._initBscroll();
  },
  methods: {
    ...mapMutations(["changeCityName"]),
    _initBscroll() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.citylist);
      });
    },
    changeCity(cityName) {
      this.changeCityName(cityName);
      this.$router.push("/");
    }
  },
  watch: {
    //监听被点击字母的变化
    letter(newValue) {
      //获取被点击字母元素所在的Dom，BScroll提供的接口需要该Dom
      if (this.$refs[newValue]) {
        //判断为了防止报错
        const ele = this.$refs[newValue][0];
        this.scroll.scrollToElement(ele);
      }
    }
  },
  computed: {
    ...mapState(["city"])
  }
};
</script>
<style lang='scss' scoped>
.citylist {
  position: absolute;
  top: 79px;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  .title {
    line-height: 0.54rem;
    padding-left: 0.2rem;
    background-color: #eee;
    color: #666;
  }
  .list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .city-name {
      width: 28%;
      padding: 0.1rem 0;
      margin: 0.1rem;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
  .name {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>