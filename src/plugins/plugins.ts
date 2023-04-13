import fonts from "@/plugins/fonts";
import icons from "@/plugins/icons";
import pinia from "@/plugins/pinia";
import vuetify from "@/plugins/vuetify";
import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(fonts).use(icons).use(pinia).use(vuetify);
}
