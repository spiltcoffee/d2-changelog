<template>
  <v-card class="ma-4">
    <v-card-title>
      <div class="changelog-anchor">
        <div class="changelog-anchor__ref" :id="changelog.id"></div>
      </div>
      <a :href="`#${changelog.id}`" ref="titleRef" class="text-decoration-none">
        {{ changelog.title }}
        <v-icon
          class="pb-2"
          icon="fa-solid fa-link"
          size="x-small"
          v-show="isTitleHovered"
        />
      </a>
    </v-card-title>
    <v-card-subtitle>
      <div class="text-subtitle-1 my-1">{{ changelog.subtitle }}</div>
      <div class="my-1">
        {{ changelog.formattedDate }}, {{ changelog.formattedSince }}
      </div>
    </v-card-subtitle>
    <v-card-text>
      <div class="changelog-content" v-html="changelog.content"></div>
      <div v-show="false">{{ props.changelog }}</div>
      <div>
        <a
          :href="changelog.extUrl"
          target="_blank"
          rel="noreferrer noopener"
          class="text-decoration-none"
        >
          View on bungie.net
          <v-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            size="x-small"
          />
        </a>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, defineProps, reactive } from "vue";
import { useElementHover, useDateFormat, useTimeAgo } from "@vueuse/core";
import { useSanitiseHtml } from "@/composables/sanitiseHtml";
import { type NewsArticle } from "@/composables/changelogsStore";

const props = defineProps<{ changelog: NewsArticle }>();

const titleRef = ref();
const isTitleHovered = useElementHover(titleRef);

const changelog = reactive({
  id: props.changelog.UniqueIdentifier,
  title: props.changelog.Title,
  subtitle: props.changelog.Description,
  content: useSanitiseHtml(props.changelog.HtmlContent),
  extUrl: new URL(props.changelog.Link, "https://www.bungie.net"),
  formattedDate: useDateFormat(props.changelog.PubDate, "DD/MM/YYYY"),
  formattedSince: useTimeAgo(props.changelog.PubDate),
});
</script>

<style>
.changelog-anchor {
  position: relative;
}
.changelog-anchor__ref {
  position: absolute;
  top: -90px;
}

.changelog-content * {
  all: revert;
}
</style>
