let isValid = (s) => {
  // create a stack
  let stack = []

  // iterate over string
  for (let i = 0; i < s.length; i++) {
    // char is current character we're on
    let char = s[i]
    switch (char) {
      // if current character is (, push ) to stack
      case '(': stack.push(')')
      break;
      // if current character is [, push ] to stack
      case '[': stack.push(']')
      break;
      // if current character is {, push } to stack
      case '{': stack.push('}')
        break;
      // else if current character (either '],),}' ) is not the same as the popped char of the stack, then return false
      default:
        if (char !== stack.pop()) {
          return false
        }
    }
  }
  // if stack length is 0, return true
  return stack.length === 0
}
/*
'([{}[]])'
char = )
pop = )
[]
*/