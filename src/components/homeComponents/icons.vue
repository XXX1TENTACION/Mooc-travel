<template>
  <div class="icons-wrapper">
    <swiper>
      <swiper-slide v-for="page in pages" :key="page.$index">
        <div class="icons-item" v-for="item in page" :key="item.id">
          <div class="img-wrapper">
            <img :src="item.imgUrl" width="70" />
          </div>
          <p class="icons-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "icons",
  props: {
    iconList: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    //将数据组织成[[{...},{....},第一页的八条数据]，[第二页的数据]，[第三页的数据]]，二位数组的形式
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        //page代表该数据属于第几页
        const page = Math.floor(index / 8);
        //向新的一页添加数据是，将数组初始化为空数组
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang='scss' scoped>
.icons-wrapper >>> .swiper-slide {
  width: 100%;
  height: 3.75rem;
  display: flex;
  flex-wrap: wrap;
}
.icons-wrapper {
  width: 100%;
  margin-top: 0.1rem;
  .icons-item {
    flex: 0 0 25%;
    position: relative;
    height: 50%;
    box-sizing: border-box;
    padding-bottom: 0.44rem;
    .img-wrapper {
      text-align: center;
    }
    .icons-desc {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0.44rem;
      width: 100%;
      text-align: center;
      line-height: 0.44rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>