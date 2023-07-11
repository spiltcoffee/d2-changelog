import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// some twabs ended up in the updates category by mistake :/
const twabRegex = new RegExp("this week at bungie", "i");
const API_KEY = import.meta.env.D2_CHANGELOG_API_KEY;

interface NewsArticlesData {
  Response: {
    NewsArticles: NewsArticle[];
    NextPaginationToken?: number;
  };
  ErrorStatus: string;
  ErrorCode: number;
}

export interface NewsArticle {
  Title: string;
  Link: string;
  PubDate: string;
  UniqueIdentifier: string;
  Description: string;
  HtmlContent?: string;
  ImagePath: string;
  OptionalMobileImagePath?: string;
}

export const useChangelogsStore = defineStore("changelogs", () => {
  const changelogs = useLocalStorage<NewsArticle[]>("changelogs", []);
  const initialised = useLocalStorage("initialised", false);
  const lastUpdated = useLocalStorage("lastUpdated", 0);
  const currentUpdated = ref(Date.now());

  const isOutOfDate = computed(() => {
    const dateToCompare = new Date(lastUpdated.value);
    dateToCompare.setHours(dateToCompare.getHours() + 1);
    return dateToCompare.getTime() < Date.now();
  });

  function refresh() {
    changelogs.value = [];
    initialised.value = false;
    currentUpdated.value = Date.now();
  }

  async function load() {
    if (!initialised.value || isOutOfDate.value) {
      changelogs.value = await fetch();
      initialised.value = true;
      lastUpdated.value = Date.now();
    }
    return changelogs.value;
  }

  async function fetch(): Promise<NewsArticle[]> {
    let newChangelogs: NewsArticle[] = [];
    let hasNextPage = true;

    for (let pageCount = 0; hasNextPage; pageCount++) {
      const page = await fetchPage(pageCount);

      // if the first item we fetch is the same as one already cached, just return the cache
      if (
        changelogs.value.length &&
        pageCount === 0 &&
        page.changelogs[0].UniqueIdentifier ===
          changelogs.value[0].UniqueIdentifier
      ) {
        return changelogs.value;
      }

      newChangelogs = [...newChangelogs, ...page.changelogs];
      hasNextPage = page.hasNextPage;
    }

    return newChangelogs;
  }

  async function fetchPage(pageCount: number) {
    const url = `https://www.bungie.net/Platform/Content/Rss/NewsArticles/${pageCount}/?categoryfilter=updates&includebody=true`;

    try {
      const { data } = await axios.get<NewsArticlesData>(url, {
        headers: { "x-api-key": API_KEY },
      });

      if (data.ErrorCode !== 1) {
        throw new Error(
          `Error while fetching ${url}: ${data.ErrorStatus} (${data.ErrorCode})`,
        );
      }

      const changelogs = data.Response.NewsArticles.filter(
        ({ Title }) => !twabRegex.test(Title),
      );

      const hasNextPage = !!data.Response.NextPaginationToken;

      return { changelogs, hasNextPage };
    } catch (error) {
      throw new Error(`Error while fetching ${url}: ${error}`);
    }
  }

  return {
    currentUpdated,
    load,
    refresh,
  };
});
