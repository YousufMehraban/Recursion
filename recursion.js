/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

// function product2(nums, idx = 0){
//   if(idx === nums.length) return 1;
//   return nums[idx] * product2(nums, idx += 1)
// }

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longStr = 0) {
  if (idx === words.length) return longStr;
  longStr = Math.max(longStr, words[idx].length);
  return longest(words, (idx += 1), longStr);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0, newStr = "") {
  if (newStr.length === str.length || idx >= str.length) {
    if (str === newStr) {
      return true;
    } else {
      return false;
    }
  }
  newStr += str[str.length - 1 - idx];
  return isPalindrome(str, idx + 1, newStr);
}

// function isPalindrome2(str, idx = 0) {
//   let leftIdx = idx;
//   let rightIdx = str.length - idx - 1;
//   if (leftIdx >= rightIdx) return true;
//   if (str[leftIdx] !== str[rightIdx]) return false;
//   return isPalindrome(str, idx + 1);
// }

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, revStr = "") {
  if (str.length === revStr.length || idx === str.length) return revStr;
  revStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (let x in obj) {
    if (typeof obj[x] === "string") arr.push(obj[x]);
    if (typeof obj[x] === "object") arr.push(...gatherStrings(obj[x]));
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
binarySearch([1, 2, 3, 4], 1); // 0
binarySearch([1, 2, 3, 4], 3); // 2
binarySearch([1, 2, 3, 4], 5); // -1
function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length) {
  if (leftIdx > rightIdx) {
    return -1;
  }
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  if (arr[middleIdx] === val) {
    return middleIdx;
  }
  if (arr[middleIdx] > val) {
    return binarySearch(arr, val, leftIdx, (rightIdx = middleIdx - 1));
  }
  return binarySearch(arr, val, (leftIdx = middleIdx + 1), rightIdx);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
