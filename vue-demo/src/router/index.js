import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import index from "@/view/index";
import Exercise1 from "@/components/exercise1";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/exercise2"
    },
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/exercise1",
      name: "index",
      component: Exercise1
    },
    {
      path: "/exercise2",
      name: "index",
      component: () => import("@/components/exercise2/index.vue")
    }
  ]
});
