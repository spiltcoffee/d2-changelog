import type { App } from "vue";
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
