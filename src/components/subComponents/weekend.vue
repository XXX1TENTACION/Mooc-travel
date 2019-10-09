<template>
  <div class="recommend">
    <div class="title">
      <span>周末去哪儿</span>
    </div>
    <div class="list">
      <ul class="list-wrapper">
        <li class="list-item border-bottom" v-for="item in recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: 1,
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: "奥林匹克塔",
          desc:
            "室外展区设计遵循“师法自然，道法自然”的设计理念，在不破坏原有自然景观的前提下进行的设计，"
        },
        {
          id: 2,
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: "奥林匹克塔",
          desc:
            "室外展区设计遵循“师法自然，道法自然”的设计理念，在不破坏原有自然景观的前提下进行的设计，"
        },
        {
          id: 3,
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: "奥林匹克塔",
          desc:
            "室外展区设计遵循“师法自然，道法自然”的设计理念，在不破坏原有自然景观的前提下进行的设计，"
        }
      ]
    };
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