export default function getTabIndex(index, subIndex) {
  const totalComponentInAFilter = 2;
  return index * totalComponentInAFilter + subIndex;
}
