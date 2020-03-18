

// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  // take the string and seperate it into mini strings
  let seperate = s.split('')
  let objectCheck = {}
  // iterate over the array and turn each value into a key value pair 
  for (var i = 0; i < seperate.length; i++){
      if (objectCheck[seperate[i]] ){
          objectCheck[seperate[i] ] = 2;
      } else{
        objectCheck[seperate[i] ]= 1;
      }
  }
  console.log(objectCheck)
  for (var i=0; i < seperate.length; i++){
    if (objectCheck[seperate[i] ]===1 ){
      return i;
    }
  }
  return -1;
};