import type { App } from "vue";
import vuetify from "./vuetify";
import pinia from "../store";
import icons from "./icons";

export function registerPlugins(app: App) {
  app.use(vuetify).use(pinia).use(icons);
}
