<template>
  <div>
    <detail-banner></detail-banner>
    <common-gallary></common-gallary>
  </div>
</template>
<script>
import DetailBanner from "../detailComponents/banner";
import CommonGallary from "common/gallary/gallary";
export default {
  name: "detail",
  components: {
    DetailBanner,
    CommonGallary
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
</style>