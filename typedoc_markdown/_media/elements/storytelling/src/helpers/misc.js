import { MARKDOWN_VERSION_MAP } from "../enums/plugin.js";
import packageInfo from "../../package.json";

/**
 * Create anchor click event and scroll into view when navigation anchor clicked
 *
 * @param {import("lit").LitElement} that - The LitElement instance.
 * @param {String} selector - element selector string
 */
export function scrollAnchorClickEvent(that, selector) {
  (that.shadowRoot || that).querySelectorAll(selector).forEach((doc) => {
    doc.addEventListener("click", (e) => {
      e.preventDefault();
      window.parent.location.hash = /** @type {HTMLAnchorElement} */ (
        e.currentTarget
      ).hash.replace("#", "");
      scrollIntoView(that);
    });
  });
}

/**
 * Scroll Into View if hash and element with same `id` is present.
 *
 * @param {import("lit").LitElement} that - The LitElement instance.
 */
export function scrollIntoView(that) {
  const hash = window.parent.location.hash;
  const element = hash
    ? /**@type{HTMLElement}*/ (that.shadowRoot.querySelector(hash))
    : null;
  if (element) {
    const navBar = that.shadowRoot.querySelector(".navigation");
    element.style.scrollMarginTop = `calc(${
      navBar?.getBoundingClientRect().top +
        navBar?.getBoundingClientRect().height ||
      that.getBoundingClientRect().top
    }px + 1rem)`;
    element.style.scrollMarginBottom = "1rem";
    const firstStepSection = element.querySelector("section-step");
    if (firstStepSection)
      firstStepSection.scrollIntoView({ behavior: "smooth", block: "center" });
    else element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Generate custom element handling config.
 *
 * @param {import("../types").CustomMarkdownIt} md - Markdown-It instances
 * @return {{tagNameCheck: RegExp | ((tagName: string) => boolean), attributeNameCheck: RegExp | ((attributeName: string) => boolean), allowCustomizedBuiltInElements: Boolean}}
 */
export function getCustomEleHandling(md) {
  const tagNameCheck = (tagName) =>
    tagName.match(new RegExp(/^[a-z]+(-[a-z0-9]+)*$/));
  const attributeNameCheck = (attr) =>
    attr.match(new RegExp(md.attrs.keys.join("|")));

  return {
    tagNameCheck,
    attributeNameCheck,
    allowCustomizedBuiltInElements: true,
  };
}

/**
 * Add lightbox external library CSS
 */
export function addLightBoxScript() {
  const style = document.createElement("style");
  style.innerHTML = `
      @import url("https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css");
    `;
  document.body.appendChild(style);
}

/**
 * Convert string based version to integer
 *
 * @param {String} version - package version string
 * @return {Number} - Number based converted version
 */
export function versionToInteger(version) {
  const versionParts = version.split("-")[0].split(".").map(Number);
  let versionInteger = 0;
  const base = 1000;

  for (let i = 0; i < versionParts.length; i++) {
    versionInteger +=
      versionParts[i] * Math.pow(base, versionParts.length - i - 1);
  }

  return versionInteger;
}

/**
 * check markdown version is compatible with @eox/storytelling package
 *
 * @param {Number | null} version - markdown version
 */
export function checkMarkdownVersion(version) {
  const latestMarkdownVersion = Number(
    Object.keys(MARKDOWN_VERSION_MAP).find(
      (key) => MARKDOWN_VERSION_MAP[key].length === 1,
    ),
  );
  const currenMarkdownVersion = MARKDOWN_VERSION_MAP[version];

  if (!version || !currenMarkdownVersion) {
    console.warn(
      `Version not (or wrongly) specified in markdown frontmatter. Assuming latest markdown syntax version (v${latestMarkdownVersion}).`,
    );
    return latestMarkdownVersion;
  } else if (latestMarkdownVersion === version) return version;
  else {
    const currentMarkdownVersionArray = [
      versionToInteger(currenMarkdownVersion[0]),
      versionToInteger(currenMarkdownVersion[1]),
    ];
    const currentPackageVersion = versionToInteger(packageInfo.version);
    if (
      currentPackageVersion >= currentMarkdownVersionArray[0] &&
      currentPackageVersion <= currentMarkdownVersionArray[1]
    ) {
      return version;
    } else {
      console.error(
        `You are using an older or newer version of ${packageInfo.name} package, which is not compatible with the version defined in the markdown frontmatter. Please update the ${packageInfo.name} package to (>=${currenMarkdownVersion[0]} and <=${currenMarkdownVersion[1]}) or change the markdown syntax version to ${packageInfo.version}`,
      );
      return version;
    }
  }
}
