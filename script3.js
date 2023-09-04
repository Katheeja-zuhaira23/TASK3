//IIFE functions
//odd numbers in an array

(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7];
    var oddNumbers = numbers.filter(function (number) {
      return number % 2 !== 0;
    });
    console.log(oddNumbers);
  })();
  

//title-caps in an array

  (function (){
     function caps(str){
      let res=[]
      for(let i=0;i<str.length;i++)
      res.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
      return res;
     }

     let input=["katheeja","kamal"]
     let result = caps(input)
     console.log(result)   
})();

//median of two array
    (function(){
        var arr1=[1,2]
        var arr2=[6,4]    
    function median(arr1,arr2){
    let sort1=arr1.sort()
    let sort2=arr2.sort()
    let merged = [...arr1,...arr2]
    let mid=(sort1[sort1.length-1])+(sort2[sort2.length-1])
    let mid_val = mid/2
    return mid_val;
    }
    let result=median(arr1,arr2)
    console.log(result);
})();

//sum of all numbers:

(function(){
function sumOfNums(){
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum;
}
let nums = [1, 2, 3, 4, 5]
let result = sumOfNums(nums)
console.log(result)

})();

//palindromes in an array

(function(){
function palindrome(string) {

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
let strings = ["mam", "sir", "eye", "ummu", "habeeba"]
let result = printPalindromes(strings)
//console.log(result);
})();

//Remove duplicates from an array

(function () {
    function removeDupes(){
    let unique = [...new Set(array)]
    console.log(unique)
}
let array = [1, 2, 3, 3, 4, 4, 4, 5]
let result = removeDupes(array);
//console.log(result);
})();

//Rotate an array by k times

(function(){
function rotateArray(arr, k) {

    for (let i = 0; i < k; i++) {
        const element = arr.shift();
        arr.push(element);
    }
}

const myArray = [1, 2, 3, 4, 5];
const rotations = 3;
rotateArray(myArray, rotations);
console.log(myArray);
})();


//prime numbers in an array

(function(){

function prime_num(num) {
    if (num % 2 === 0) return false
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
})();



















