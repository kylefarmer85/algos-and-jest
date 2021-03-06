// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//   let result = ''
//   for (let char of s) {
//     let repeatedChar = char.repeat(s.indexOf(char) + 1);
//     if (s.indexOf(char) === s.length - 1) {
//       result += repeatedChar[0].toUpperCase() + repeatedChar.toLowerCase().slice(1)
//     } else {
//       result += repeatedChar[0].toUpperCase() + repeatedChar.toLowerCase().slice(1) + "-"
//     }
//   }
//   return result;
// }


// new solution for repeated chars accum('aABcb')
function accum(s) {
  let result = '';
  for (let i = 0; i <= s.length - 1; i++) {
    let repeatedChar = s[i].repeat(i + 1);
    if (i === s.length - 1) {
      result +=
        repeatedChar[0].toUpperCase() + repeatedChar.toLowerCase().slice(1);
    } else {
      result +=
        repeatedChar[0].toUpperCase() +
        repeatedChar.toLowerCase().slice(1) +
        '-';
    }
  }
  return result;
}

// best solution
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

module.exports = accum;