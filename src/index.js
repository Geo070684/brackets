module.exports = function check(str, bracketsConfig) {

  const stackFrom = [];
  const bracketForPair = {};
  const openBracket = [];

  for (let j = 0; j < bracketsConfig.length; j++) {
    bracketForPair[bracketsConfig[j][1]] = bracketsConfig[j][0]
    openBracket.push(bracketsConfig[j][0])
    // console.log(openBracket)
  }


  for (let i = 0; i < str.length; i++) {
    let currentElement = str[i];
    if (openBracket.includes(currentElement)) {
      stackFrom.push(currentElement)
      if ((stackFrom.includes('|') && currentElement === "|")) {
        stackFrom.pop();
      }
    } else {
      if (stackFrom.length === 0) {
        return false;
      }
      let topElementFromStack = stackFrom[stackFrom.length - 1]
      if (bracketForPair[currentElement] === topElementFromStack) {
        stackFrom.pop();
      } else {
        return false
      }
    }

  } return stackFrom.length === 0;
}




// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// check('||', config4)