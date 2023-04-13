import "vuetify/styles";
import { aliases, fa } from "vuetify/iconsets/fa-svg";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import { createVuetify } from "vuetify";

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
