<template>
  <v-alert
    v-if="hasError"
    title="Error Loading Changelogs"
    text="Please refresh and try again."
    type="error"
    border="start"
    variant="tonal"
    class="ma-4"
  ></v-alert>
  <template v-else>
    <v-skeleton-loader
      v-if="isLoading"
      class="ma-4"
      type="heading, text, paragraph"
      :elevation="1"
    ></v-skeleton-loader>
    <template v-else v-for="(changelog, index) in changelogs" :key="index">
      <ChangelogItem :changelog="changelog"></ChangelogItem>
    </template>
  </template>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { computedAsync } from "@vueuse/core";
import { useChangelogsStore } from "@/composables/changelogsStore";
import ChangelogItem from "@/components/ChangelogItem.vue";

const changelogStore = useChangelogsStore();
const { currentUpdated } = storeToRefs(changelogStore);

const isLoading = ref(false);
const hasError = ref(false);

const changelogs = computedAsync(
  async () => {
    currentUpdated;
    const changelogs = await changelogStore.load();
    hasError.value = false;
    return changelogs;
  },
  [],
  {
    evaluating: isLoading,
    onError: () => (hasError.value = true),
  }
);
</script>
