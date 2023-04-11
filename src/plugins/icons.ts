import type { App } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faLink,
  faCodeMerge,
  faGlobe,
  faRotate,
  faToggleOn,
  faToggleOff,
  faChevronDown,
  faChevronUp,
  faGear,
  faExclamationTriangle,
  faCircleInfo,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default async function loadIcons(app: App) {
  library.add(
    faBars,
    faLink,
    faCodeMerge,
    faGlobe,
    faRotate,
    faToggleOn,
    faToggleOff,
    faChevronDown,
    faChevronUp,
    faGear,
    faExclamationTriangle,
    faCircleInfo,
    faArrowUpRightFromSquare,
    faGithub
  );

  app.component("font-awesome-icon", FontAwesomeIcon);
}
