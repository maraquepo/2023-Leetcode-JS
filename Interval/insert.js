/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

const insert = (intervals, newInterval) => {
  const result = []

  for (const [start, end] of intervals) {
    // if newInterval is already added or the current interval ends before newInterval starts
    if (!newInterval || end < newInterval[0]) {
      result.push([start, end])
    // if newInterval ends before the current one starts
    } else if (start > newInterval[1]) {
      result.push(newInterval)
      newInterval = null
      result.push([start, end])
    // if there is an overlap that requires a merge
    } else {
      newInterval[0] = Math.min(newInterval[0], start)
      newInterval[1] = Math.max(newInterval[1], end)
    }
  }

  if (newInterval) {
    result.push(newInterval)
  }

  return result;
};

/*
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]

start = 8
end = 10
newInterval[0] = 3
newInterval[1] = 10


result = [[1,2],[3,10],[12,16]]
*/