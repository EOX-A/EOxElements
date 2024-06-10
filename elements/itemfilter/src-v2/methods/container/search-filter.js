import Fuse from "fuse.js";

function searchFilterMethod(event, EOxItemFilterContainer) {
  const fuse = new Fuse(EOxItemFilterContainer.filterProperties, {
    keys: ["title"],
  });
  const inputText = event.target.value;
  const result = fuse.search(inputText);
  const matches = result.map((res) => res.item.key || res.item.keys.join("|"));

  Object.keys(EOxItemFilterContainer.filters).forEach((filter) => {
    EOxItemFilterContainer.querySelector(
      `[data-details="${filter}"]`
    ).parentElement.style.display =
      matches.includes(filter) || !inputText ? "" : "none";
  });
}

export default searchFilterMethod;
