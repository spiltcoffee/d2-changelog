<template>
  <v-app-bar :density="mobile ? 'compact' : 'default'">
    <v-app-bar-nav-icon @click="$emit('show-menu')">
      <v-icon icon="fa-solid fa-bars" />
    </v-app-bar-nav-icon>
    <v-app-bar-title>
      <v-icon icon="fa-solid fa-code-merge" />
      Destiny 2 Changelog
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

defineEmits(["show-menu"]);

const { mobile } = useDisplay();
</script>
