import { type App } from "vue";
import VueRouter from "vue-router";

export default function loadRouter(app: App) {
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [],
    scrollBehavior: (to, _from, savedPosition) =>
      savedPosition || { el: to.hash, top: -30, behavior: "smooth" },
  });

  app.use(router);
}
