import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBars,
  faChevronDown,
  faChevronUp,
  faCircleInfo,
  faCodeMerge,
  faExclamationTriangle,
  faGear,
  faGlobe,
  faLink,
  faRotate,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { App } from "vue";

export default async function loadIcons(app: App) {
  library.add(
    faGithub,
    faArrowUpRightFromSquare,
    faBars,
    faChevronDown,
    faChevronUp,
    faCircleInfo,
    faCodeMerge,
    faExclamationTriangle,
    faGear,
    faGlobe,
    faLink,
    faRotate,
    faToggleOff,
    faToggleOn,
  );

  app.component("font-awesome-icon", FontAwesomeIcon);
}
