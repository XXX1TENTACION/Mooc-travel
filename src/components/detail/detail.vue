<template>
  <div>
    <detail-banner
      @imgShow="show"
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <common-fade>
      <common-gallary :gallaryImgs="gallaryImgs" v-show="flag" @imgHide="hide"></common-gallary>
    </common-fade>
    <detail-header></detail-header>
    <detail-list :categoryList="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from "../detailComponents/banner";
import CommonGallary from "common/gallary/gallary";
import DetailHeader from "./header";
import DetailList from "../detailComponents/list";
import CommonFade from "../../common/fade/fade";
import axios from "axios";
export default {
  name: "detail",
  components: {
    DetailBanner,
    CommonGallary,
    DetailHeader,
    DetailList,
    CommonFade
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      categoryList: [],
      flag: false
    };
  },
  methods: {
    show() {
      this.flag = true;
    },
    hide() {
      this.flag = false;
    },
    success(res) {
      let data = res.data.data;
      this.sightName = data.sightName;
      this.bannerImg = data.bannerImg;
      this.gallaryImgs = data.gallaryImgs;
      this.categoryList = data.categoryList;
    }
  },
  mounted() {
    axios
      .get("/api/detail.json", {
        params: {
          id: this.$route.params.id
        }
      })
      .then(this.success);
  }
};
</script>
<style lang='scss' scoped>
.content {
  height: 50rem;
}
</style>