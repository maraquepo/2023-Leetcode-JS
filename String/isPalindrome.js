const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}


const isPalindrome = (s) => {
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let reversed = cleaned.split('').reverse().join('')

  return cleaned === reversed
};

/*
'Race car'
raceacar
i      j

'Race car'
racecar
racecar