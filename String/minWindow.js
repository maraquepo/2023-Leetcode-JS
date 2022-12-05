let minWindow = (s,t) => {
  let result = ""
  let tMap = {}

  for (let i = 0; i < t.length; i++) {
    tMap[t[i]] = (tMap[t[i]] || 0) + 1
  }

}

console.log(minWindow('ABC'))