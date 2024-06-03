export default function getTabIndex(index, subIndex) {
  const totalComponentInAFilter = 3;
  return index * totalComponentInAFilter + subIndex;
}
