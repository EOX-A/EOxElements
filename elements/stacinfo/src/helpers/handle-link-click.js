import { dispatchElementEvent } from "@eox/elements-utils";

/**
 * Handles click events on links within EOxStacInfo.
 * Extracts href, text, and section, then dispatches the "click:link" CustomEvent
 * and standardized "eox:activity" event.
 *
 * @param {MouseEvent} e - The native click event.
 * @param {import("../main.js").EOxStacInfo} that - The component instance.
 */
export default function handleLinkClick(e, that) {
  const path = e.composedPath();
  const anchor = /** @type {HTMLAnchorElement | undefined} */ (
    path.find(
      (el) =>
        el instanceof HTMLElement &&
        el.tagName === "A" &&
        el.hasAttribute("href"),
    )
  );
  if (!anchor) return;

  const sectionEl = /** @type {HTMLElement | undefined} */ (
    path.find(
      (el) =>
        el instanceof HTMLElement &&
        (el.getAttribute("part") ||
          ["header", "footer"].includes(el.tagName.toLowerCase())),
    )
  );
  const section =
    sectionEl?.getAttribute("part") ||
    (sectionEl?.tagName.toLowerCase() === "header"
      ? "header"
      : sectionEl?.tagName.toLowerCase() === "footer"
        ? "footer"
        : undefined);

  /**
   * Fires when a link is clicked within the STAC info component.
   */
  dispatchElementEvent(that, "click:link", {
    detail: {
      href: anchor.getAttribute("href") || "",
      text: anchor.textContent?.trim() || "",
      section,
    },
    bubbles: true,
    composed: true,
    activity: true,
    action: "click:link",
    originalEvent: e,
  });
}
