/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

const canAttendMeetings = (intervals) => {
  if (intervals.length === 0) return true
  intervals.sort((a, b) => a[0] - b[0])

  let end = intervals[0][1]

  for (let i = 0; i < intervals.length; i++) {
    if (end <= intervals[i][0]) {
      end = interval[i][1]
    } else {
      return false
    }
  }
  return true;
};