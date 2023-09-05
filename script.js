//odd numbers evaluation using anonymous fn
let num_arr = [1, 2, 3, 4, 5, 6, 7]
const odd = function () {
    for (let i = 0; i < num_arr.length; i++) {
        if (num_arr[i] % 2 !== 0)
            console.log(num_arr[i])
    }
}
odd(num_arr);

//title caps in string array

let title_caps = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function changeArray(arrayString) {
    for (let i = 0; i < arrayString.length; i++) {
        arrayString[i] = title_caps(arrayString[i])
    }
    return arrayString;
}
const arr = ["katheeja", "kamaal", "shajeea", "fazhila"];
console.log(changeArray(arr));

//sum of all numbers:

let nums = [1, 2, 3, 4, 5]

let sumOfNums = function () {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum;
}
console.log(sumOfNums(nums));

//prime numbers in an array


let prime_num = function (num) {
    if (num % 2 === 0 || num === 1) return false
    if (num === 2) return true
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0)
            return false;
    }
    return true;
}

function findPrimesInArray(arr) {
    const primeNumbers = [];
    for (const num of arr) {
        if (prime_num(num)) {
            primeNumbers.push(num);
        }
    }

    return primeNumbers;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(findPrimesInArray(numbers));

//palindromes in an array

let strings = ["mam", "sir", "eye", "ummu", "habeeba"]

let palindrome = function (string) {

    let rev = string.split("").reverse().join("")
    if (string === rev)
        return true;

}

function printPalindromes(arr) {
    let res = []
    for (const str of arr) {
        if (palindrome(str)) {
            res.push(str)
            console.log(res);
        }
    }
}
printPalindromes(strings);

//Remove duplicates from an array

let array = [1, 2, 3, 3, 4, 4, 4, 5]

let removeDupes = function () {
    let unique = [...new Set(array)]
    console.log(unique)
}
removeDupes(array);

//Rotate an array by k times

let rotateArray = function (arr, k) {

    for (let i = 0; i < k; i++) {
        const element = arr.shift();
        arr.push(element);
    }
}

const myArray = [1, 2, 3, 4, 5];
const rotations = 3;
rotateArray(myArray, rotations);
console.log(myArray);

//median of two sorted arrays

let arr1=[1,2]
let arr2=[6,4]
let median = function(arr1,arr2){
    let sort1=arr1.sort()
    let sort2=arr2.sort()
    let merged = [...arr1,...arr2]
    console.log(merged)
    let mid=(sort1[sort1.length-1])+(sort2[sort2.length-1])
    console.log(mid/2)
}
median(arr1,arr2)
























































