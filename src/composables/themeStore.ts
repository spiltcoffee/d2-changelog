import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { useTheme } from "vuetify";

export const useThemeStore = defineStore("theme", () => {
  const theme = useTheme();

  const darkMode = useLocalStorage("darkMode", false);

  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    updateTheme();
  }

  function updateTheme() {
    theme.global.name.value = darkMode.value ? "dark" : "light";
  }

  return { darkMode, toggleDarkMode, updateTheme };
});
