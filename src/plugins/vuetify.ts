import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import { aliases, fa } from "vuetify/iconsets/fa-svg";

export default createVuetify({
  components: {
    VSkeletonLoader,
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#344168",
          secondary: "#5CBBF6",
        },
      },
    },
  },
});
