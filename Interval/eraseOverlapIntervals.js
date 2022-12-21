/**
 * @param {number[][]} intervals
 * @return {number}
 */

const eraseOverlapIntervals = (intervals) => {
  if (intervals.length === 0) {
    return 0;
  }

  // sort by ends of each interval
  intervals.sort((a, b) => a[1] - b[1]);
  // initiate end at end of first interval
  let end = intervals[0][1]
  // initiate count at 1
  let count = 1;

  // iterate over array starting at 2nd interval
  for (let i = 1; i < intervals.length; i++) {
    // if start of current interval is greater than end
    // if end is less than start of current interval
    if (intervals[i][0] >= end) {
      // update end to current intervals end
      end = intervals[i][1];
      // increment count
      count++;
    }
  }
  return intervals.length - count;
};

/*
intervals = [[1,2],[2,3],[3,4],[1,3]]

[[1,2],[2,3],[1,3],[3,4]]
end = 2

current start = 2
end = 3
count = 2

current start 1
end----

current start = 3
end = 3
count = 3

4 - 3
*/