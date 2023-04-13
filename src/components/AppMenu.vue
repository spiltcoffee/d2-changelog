<template>
  <v-navigation-drawer v-model="isShowing" temporary>
    <div class="d-flex flex-column h-100">
      <v-list density="compact">
        <v-list-group>
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Settings">
              <template #prepend>
                <v-icon icon="fa-solid fa-gear" />
              </template>
            </v-list-item>
          </template>

          <v-list-item
            title="Dark Mode"
            link
            @click="themeStore.toggleDarkMode()"
          >
            <template #prepend>
              <v-icon
                :icon="`fa-solid ${
                  isDarkMode ? 'fa-toggle-on' : 'fa-toggle-off'
                }`"
              />
            </template>
          </v-list-item>

          <v-list-item
            title="Force Refresh"
            link
            @click="changelogStore.refresh()"
          >
            <template #prepend>
              <v-icon icon="fa-solid fa-rotate" />
            </template>
          </v-list-item>
        </v-list-group>

        <v-list-group value="About">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="About">
              <template #prepend>
                <v-icon icon="fa-solid fa-circle-info" />
              </template>
            </v-list-item>
          </template>

          <v-list-item
            title="d2-changelog"
            subtitle="GitHub"
            href="https://github.com/spiltcoffee/d2-changelog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <template #prepend>
              <v-icon icon="fa-brands fa-github" />
            </template>
          </v-list-item>

          <v-list-item
            title="spiltcoffee.com"
            subtitle="Website"
            href="https://spiltcoffee.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <template #prepend>
              <v-icon icon="fa-solid fa-globe" />
            </template>
          </v-list-item>

          <v-list-item
            href="https://bungie.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <template #prepend>
              <v-icon icon="fa-solid fa-link" />
            </template>
            All content is property of Bungie
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useThemeStore } from "@/composables/themeStore";
import { useChangelogsStore } from "@/composables/changelogsStore";

const props = defineProps<{ showMenu: boolean }>();
const emit = defineEmits<{
  (e: "update:showMenu", value: boolean): void;
  (e: "refresh"): void;
}>();

const themeStore = useThemeStore();
const changelogStore = useChangelogsStore();

const isShowing = computed({
  get: () => props.showMenu,
  set: (value: boolean) => emit("update:showMenu", value),
});

const isDarkMode = computed({
  get: () => themeStore.darkMode,
});
</script>
