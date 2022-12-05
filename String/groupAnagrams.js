let groupAnagrams = (strs) => {
  // create hashtable to store sorted string as key and individual string as values
  let hashTable = {}

  // iterate over array of strings
  for (let str of strs) {
    // sort individual strings alphabetically
    let sorted = str.split('').sort().join('')
    // if sorted (as key) exists in the hashtable, push it to array, if not, create new key in the hash table
    hashTable[sorted] ? hashTable[sorted].push(str) : hashTable[sorted] = [str]
  }
  // return values of the hash table object
  return Object.values(hashTable)
}

/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

'aet'
'ant'
'abt'
*/