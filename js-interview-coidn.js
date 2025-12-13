// 1. **Count Vowels:**
//   Write a program to count the number of vowels (`a, e, i, o, u`) in a given string.

// 2. **Reverse String:**
//   Given a string, reverse it **without using** the built-in `.reverse()` method.

// 3. **Find Longest Word:**
//   Write a program that takes a sentence and returns the **longest word**.

// 4. **Count Words:**
//   Given a sentence, count how many words it contains.

// 5. **Check Palindrome:**
//   Write a function that checks whether a given string is a **palindrome** (reads the same forward and backward).

// 6. **Replace Word:**
//   Replace all occurrences of `"Javascript"` in a string with `"JS"`.

// 7. **Capitalize First Letter of Each Word:**
//   Convert `"hello world"` to `"Hello World"`.

// 8. **Count Character Occurrences:**
//   Count how many times each character appears in a given string (e.g., `"banana"` → `{b:1, a:3, n:2}`).

// 9. **Remove Duplicates:**
//   Remove all duplicate characters from a string (e.g., `"programming"` → `"progamin"`).

// 10. **Find Second Longest Word:**
//     Write a program to find the **second longest word** in a sentence.  




function reverseStr(str) { // reverse string without using .reverse
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr;
}
console.log(reverseStr("dev pr"))



// find vowels in a string
function findeVowlInStr(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count = count + 1
        }
    }
    return count;
}
console.log(findeVowlInStr("aAkriti"))



// largest word in string
function longestWordInStr(str) {
    let splitedStr = str.split(' ')
    let largestWord = "";
    for (let i = 0; i < splitedStr.length; i++) {
        if (splitedStr[i].length > largestWord.length) {
            largestWord = splitedStr[i]
        }
    }
    return largestWord;
}
console.log(longestWordInStr("i love javascript and next.js"))


// count words in a sentence
function countsWords(str) {
    let strToArr = [];
    let word = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            word += str[i];
        } else {
            if (word.length > 0) {
                strToArr.push(word);
                word = "";
            }
        }
    }
    if (word.length > 0) {
        strToArr.push(word);
    }
    return strToArr.length;
}
console.log(countsWords("We believe our research will "));


// check is palindrom
function checkPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(checkPalindrome("madam")); // true
console.log(checkPalindrome("hello")); // false



// Replace all occurrences of `"Javascript"` in a string with `"JS"`.
let text = "I love Javascript because Javascript is powerful.";
function replaceOccurancesByJs(str) {
    let strToArr = str.split(" ")
    let newStr = strToArr.map(word=> word === "Javascript" ? "JS" : word)
    return newStr.join(" "); v
}

console.log(replaceOccurancesByJs(text))


//   Convert `"hello world"` to `"Hello World"`.
let wrods = "hello world example test";

let capitalizeWords = wrods.split(" ")
.map(w=> 
    w.charAt(0).toUpperCase() + w.slice(1));
console.log(capitalizeWords.join(" "))