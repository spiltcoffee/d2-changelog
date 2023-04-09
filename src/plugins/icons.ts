import type { App } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

export async function loadIcons(app: App) {
  // library.add(faSomeIcon)

  app.component("fa-icon", FontAwesomeIcon);
}
