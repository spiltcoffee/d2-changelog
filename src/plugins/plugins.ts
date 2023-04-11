import type { App } from "vue";
import vuetify from "./vuetify";
import pinia from "./pinia";
import icons from "./icons";
import fonts from "./fonts";

export function registerPlugins(app: App) {
  app.use(vuetify).use(pinia).use(icons).use(fonts);
}
