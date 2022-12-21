/**
 * @param {number[][]} intervals
 * @return {number}
 */


const minMeetingRooms = (intervals) => {
  let result = 0;
  let array = [];

  intervals.sort((a, b) => a[0] - b[0])

  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    if (end <= intervals[i][0]) {

    }
  }
};

/*
[2,4] [7,10]

*/