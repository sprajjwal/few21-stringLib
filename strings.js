// Capitalizes the first charachter in the string
String.prototype.capitalize = function() {
  let strList = this.split('')
  i = 0
  while (true) {
    if (strList[i] !== ' ') {
      strList[i] = strList[i].toUpperCase()
      break
    }
    i += 1
  }
  return strList.join('')
}

// Make all charachters uppercase
String.prototype.allCaps = function() {
  return this.toUpperCase()
}

// Make the first charachter of each word uppercase
String.prototype.capitalizeWords = function() {
  let str = this.capitalize()
  return str.split('').map((ch, i, arr) => {
    if ((ch === ' ') && (i < arr.length - 1)) arr[i+1] = arr[i+1].toUpperCase()
    return ch
  }).join('')
}

// Removes extra spaces from the front and back
String.prototype.removeExtraSpaces = function() {
  const clearFromStart = strList => {
    let i = 0
    while (i < strList.length) {
      if (strList[i] == ' ') strList.splice(i, 1)
      else break
    }
    return strList
  }
  let strList = this.split('')
  strList = clearFromStart(strList)
  strList = clearFromStart(strList.reverse())
  return strList.reverse().join('')
}

String.prototype.kabobCase = function() {
  return snakeOrCamel('-', this)
}

String.prototype.snakeCase = function() {
  return snakeOrCamel('_', this)
}

String.prototype.camelCase = function() {
  let str = this.removeExtraSpaces()
  str = str.toLowerCase()
  str = flushSpace(str)
  i = 0
  let strList = str.split('')
  while (i < strList.length) {
    if (strList[i] === ' ') {
      strList[i+1] = strList[i+1].toUpperCase()
      strList.splice(i, 1)
    }
    else i += 1
  }
  return strList.join('')
}

String.prototype.shift = function(count) {
  let str = this
  while (count > 0) {
    str = str.slice(1) + str.slice(0, 1)
    count -= 1
  }
  return str
}


// HELPER METHODS
const flushSpace = (str) => {
  strL = str.split('')
  i = 1
  while (i < strL.length) {
    if ((strL[i] === ' ') && strL[i-1] === ' ') strL.splice(i, 1)
    else i += 1
  }
  return strL.join('')
}

function snakeOrCamel(c, str) {
  str = str.removeExtraSpaces()
  str = str.toLowerCase()
  str = flushSpace(str)
  return str.split('').map(ch => ch === ' ' ? c : ch).join('')
}

const s = " the big  abc d   ee "
console.log(s.capitalize())
console.log(s.allCaps())
console.log(s.capitalizeWords())
console.log(s.removeExtraSpaces())
console.log(s.kabobCase())
console.log(s.snakeCase())
console.log(s.camelCase())
console.log("abc".shift(2))