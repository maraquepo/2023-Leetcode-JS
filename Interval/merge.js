/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = (intervals) => {
  if (intervals.length === 0) return []
  intervals.sort((a,b) => a[0] - b[0])
  let result = [intervals[0]]

  for (const [start, end] of intervals) {
    const prevEnd = result.at(-1)[1]
    if (start <= prevEnd) {
      result.at(-1)[1] = Math.max(end, prevEnd)
    } else {
      result.push([start,end])
    }
  }
  return result;
};