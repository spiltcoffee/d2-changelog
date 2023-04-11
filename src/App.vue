<template>
  <v-app>
    <v-main>
      <AppBar @show-menu="showMenu = !showMenu" />
      <AppMenu v-model:show-menu="showMenu" />
      <ChangelogList />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppBar from "@/components/AppBar.vue";
import AppMenu from "@/components/AppMenu.vue";
import ChangelogList from "@/components/ChangelogList.vue";
import { useThemeStore } from "@/composables/themeStore";

const showMenu = ref(false);

const themeStore = useThemeStore();
themeStore.updateTheme();
</script>
