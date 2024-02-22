/**
 * Copy a given text string to the clipboard
 *
 * @param {string} text - The text to be copied to the clipboard.
 */
export default function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function () {},
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
}
