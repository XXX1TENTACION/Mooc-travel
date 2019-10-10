<template>
  <div class="recommend">
    <div class="title">
      <span>热销推荐</span>
    </div>
    <div class="list">
      <ul class="list-wrapper">
        <router-link
          tag="li"
          :to="'/detail/'+item.id"
          class="list-item border-bottom"
          v-for="item in recommendList"
          :key="item.id"
        >
          <div class="img-container">
            <img :src="item.imgUrl" width="100%" />
          </div>
          <div class="info">
            <p class="info-title">{{ item.title }}</p>
            <p class="info-desc">{{ item.desc }}</p>
            <button class="info-btn">查看详情</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend",
  props: {
    recommendList: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.title {
  line-height: 0.8rem;
  margin-top: 0.2rem;
  text-indent: 0.2rem;
  background-color: #eee;
}
.list-item {
  display: flex;
  height: 1.9rem;
  .img-container {
    flex: 0 0 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    .info-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .info-desc {
      line-height: 0.4rem;
      color: #ccc;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .info-btn {
      background-color: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      line-height: 0.44rem;
      margin-top: 0.16rem;
      color: #fff;
    }
  }
}
</style>