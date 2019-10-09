<template>
  <div class="recommend">
    <div class="title">
      <span>周末去哪儿</span>
    </div>
    <div class="list">
      <ul class="list-wrapper">
        <li class="list-item border-bottom" v-for="item in weekendList" :key="item.id">
          <div class="img-container">
            <img :src="item.imgUrl" width="100%" height="136.94" />
          </div>
          <div class="info">
            <p class="info-title">{{ item.title }}</p>
            <p class="info-desc">{{ item.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "weekend",
  props: {
    weekendList: {
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
  text-indent: 0.2rem;
  background-color: #eee;
}
.img-container {
  width: 100%;
}
.info {
  padding: 0.1rem;
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
}
</style>