import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/home";
import City from "@/components/city/city";
import Detail from "@/components/detail/detail";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/city",
      name: "city",
      component: City
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    }
  ],
  //每次进入到新的路由页面时都让页面从顶部开始显示
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
