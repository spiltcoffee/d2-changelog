import type { App } from "vue";
import fonts from "./fonts";
import icons from "./icons";
import pinia from "./pinia";
import vuetify from "./vuetify";

export function registerPlugins(app: App) {
  app.use(fonts).use(icons).use(pinia).use(vuetify);
}
