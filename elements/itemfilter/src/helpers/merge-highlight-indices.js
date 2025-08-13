/**
 * Merge highlight indices which are overlapping with existing indices and sort the range in ascending order
 *
 * @param {number[][]} indices
 * @param {Object} [opts]
 * @param {boolean} [opts.mergeAdjacent=false]
 * @returns {number[][]}
 */
function mergeHighlightIndices(indices, { mergeAdjacent = false } = {}) {
  if (!Array.isArray(indices)) return [];

  // Normalize and sort
  const sortedIndices = indices
    .map(([startRange, endRange]) => {
      if (startRange <= endRange) return [startRange, endRange];
      else return [endRange, startRange];
    })
    .sort((range1, range2) => {
      return range1[0] - range2[0] || range1[1] - range2[1];
    });

  // Sweep to merge & drop contained
  const finalIndices = [];
  for (const [startRange, endRange] of sortedIndices) {
    if (finalIndices.length === 0) {
      finalIndices.push([startRange, endRange]);
      continue;
    }
    const lastRange = finalIndices[finalIndices.length - 1];
    const canTwoRangeMerge = mergeAdjacent
      ? startRange <= lastRange[1] + 1 // overlap or touching
      : startRange <= lastRange[1]; // overlap only

    if (canTwoRangeMerge) {
      if (endRange > lastRange[1]) lastRange[1] = endRange;
    } else {
      finalIndices.push([startRange, endRange]);
    }
  }
  return finalIndices;
}

export default mergeHighlightIndices;
