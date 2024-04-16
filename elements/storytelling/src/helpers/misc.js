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
      window.parent.location.hash = e.target.hash.replace("#", "");
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
  const element = hash ? that.shadowRoot.querySelector(hash) : null;
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

/**
 * Generate custom element handling config.
 *
 * @param {import("markdown-it").default} md - Markdown-It instances
 * @return {{tagNameCheck: String, attributeNameCheck: String, allowCustomizedBuiltInElements: Boolean}}
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
  const parts = version.split("-")[0].split(".").map(Number);
  let integer = 0;
  const base = 1000;

  for (let i = 0; i < parts.length; i++) {
    integer += parts[i] * Math.pow(base, parts.length - i - 1);
  }

  return integer;
}

/**
 * check markdown version is compatible with @eox/storytelling package
 *
 * @param {Number | null} version - markdown version
 */
export function checkMarkdownVersion(version) {
  const latestMarkdownVersion = Number(
    Object.keys(MARKDOWN_VERSION_MAP).find(
      (key) => MARKDOWN_VERSION_MAP[key].length === 1
    )
  );
  const currenMarkdownVersion = MARKDOWN_VERSION_MAP[version];

  if (!version || !currenMarkdownVersion) {
    console.warn(
      `Version not (or wrong) specified in your markdown. Assuming syntax from the latest markdown version (v${latestMarkdownVersion}).`
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
        `You are using an older or newer version of ${packageInfo.name} package, which is not compatible with the version mentioned on markdown. Please update the ${packageInfo.name} package to (>=${currenMarkdownVersion[0]} and <=${currenMarkdownVersion[1]}) or change the markdown version to ${packageInfo.version}`
      );
      return version;
    }
  }
}
