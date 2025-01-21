// Excersice: 1

// var finalValueAfterOperations = function (operations) {
//   let value = 0;
//   for (let operation of operations) {
//     if (operation === "++X" || operation === "X++") {
//       value += 1;
//     } else if (operation === "--X" || operation === "X--") {
//       value -= 1;
//     }
//   }
//   return value;
// };
// console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // 1

// Excersice: 2

// var defangIPaddr = function (address) {
//   return address.replace(/\./g, "[.]");
// };
// console.log(defangIPaddr);
// defangIPaddr("1.1.1.1");

// Excersice: 3

// Input: (jewels = "aA"), (stones = "aAAbbbb");
// Output: 3;

// var numJewelsInStones = function (jewels, stones) {
//   let count = 0;
//   for (let i = 0; i < jewels.length; i++) {
//     for (let j = 0; j < stones.length; j++) {
//       if (jewels[i] === stones[j]) {
//         count++;
//         // console.log(count);
//       }
//     }
//   }
//   return count;
//   console.log(count);
// };

// numJewelsInStones("aA", "aAAbbbb");

// Exersice: 4

// var findWordsContaining = function (words, x) {
//   let index = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes(x)) {
//       index.push(i);
//     }
//   }
//   return index;
// };

// console.log(
//   findWordsContaining(
//     [
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//     ],
//     "a"
//   )
// ); // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// Exercise 5

// var countConsistentStrings = function (allowed, words) {
//   let value = 0;
//   for (let i = 0; i < words.length; i++) {
//     let isConsistent = true;
//     for (let j = 0; j < words[i].length; j++) {
//       if (!allowed.includes(words[i][j])) {
//         isConsistent = false;
//         break;
//       }
//     }
//     if (isConsistent) {
//       value++;
//     }
//   }
//   return value;
// };

// countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]);

// Exercise 6 Not completed

// var findPermutationDifference = function (s, t) {
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i], "s");
//     for (let j = 0; j < s[i].length; j++) {
//         console.log(t[j], "t");
//         if ()
//     }
//   }
// };

// findPermutationDifference("abc", "bac");

// Exercise 7

// var interpret = function (command) {
//     let result = "";
//     for (let i = 0; i < command.length; i++) {
//         if (command[i] === "G") {
//             result += "G";
//         } else if (command[i] === "(" && command[i + 1] === ")") {
//             result += "o";
//             i++;
//         } else if (command[i] === "(" && command[i + 1] === "a") {
//             result += "al";
//             i += 3;
//         }
//     }
//     return result;
// };

// console.log(interpret("G()(al)")); // Goal

// Exercise 8

var mostWordsFound = function (sentences) {
  let maxWords = 0;
  for (let sentence of sentences) {
    let wordCount = sentence.split(" ").length;
    if (wordCount > maxWords) {
      maxWords = wordCount;
    }
  }
  return maxWords;
};
console.log(mostWordsFound(["alice and bob love leetcode", "i love coding"])); // 4

// let word = "alice and bob love leetcode";
// let splitedword = word.split(" ");
// let count = 0;
// for (let i = 0; i < splitedword.length; i++) {
//   count++;
// }
// console.log(count);
