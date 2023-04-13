import createDOMpurify from "dompurify";
import { type Ref, isRef, ref, unref, watchEffect } from "vue";

export function useSanitiseHtml(unsafeHtml: string | Ref) {
  const safeHtml = ref("");

  function doSanitise() {
    safeHtml.value = Purify.purify(unref(unsafeHtml));
  }

  if (isRef(unsafeHtml)) {
    watchEffect(doSanitise);
  } else {
    doSanitise();
  }

  return safeHtml;
}

class Purify {
  static purifier = createDOMpurify(window);
  static {
    Purify.purifier.addHook(
      "beforeSanitizeElements",
      (currentNode: Element) => {
        switch (currentNode.tagName) {
          case "A":
            return Purify.handleAnchor(currentNode as HTMLAnchorElement);
          case "IMG":
            return Purify.handleImage(currentNode as HTMLImageElement);
        }
      }
    );
  }

  static permittedDomains = [
    "www.bungie.net",
    "bungie.net",
    "help.bungie.net",
    "twitter.com",
    "support.microsoft.com",
    "devblogs.microsoft.com",
  ];

  private static sanitiseUrl(urlString: string): string {
    const url = new URL(urlString);

    if (url.origin === window.origin) {
      url.protocol = "https";
      url.host = "bungie.net";
      url.port = "";
    }

    return Purify.permittedDomains.includes(url.host) ? url.toString() : "";
  }

  private static handleAnchor(currentNode: HTMLAnchorElement) {
    currentNode.href = Purify.sanitiseUrl(currentNode.href);
    currentNode.target = "_blank";
    currentNode.rel = "noopener noreferrer";
    return currentNode;
  }

  private static handleImage(currentNode: HTMLImageElement) {
    currentNode.src = Purify.sanitiseUrl(currentNode.src);
    return currentNode;
  }

  public static purify(content: string): string {
    return Purify.purifier.sanitize(content, {
      SANITIZE_NAMED_PROPS: true,
    });
  }
}
