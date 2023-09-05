//arrow odd numbers
let num_arr=[1,2,3,4,5,6,7]
const odd = ()=>{
    for(let i=0;i<num_arr.length;i++){
    if(num_arr[i]%2!==0)
    console.log(num_arr[i])
    }
}
odd(num_arr);

//sum of all numbers:

let nums = [1, 2, 3, 4, 5]

let sumOfNums = ()=> {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum;
}
console.log(sumOfNums(nums));

//prime numbers in an array


let prime_num = (num)=> {
    if (num === 2) return true
    if (num % 2 === 0 || num === 1) return false
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0)
            return false;        
    }
    return true;
}

let findPrimesInArray = (arr)=> {
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

let strings = ["mam","sir","eye","ummu","habeeba"]

let palindrome = (string)=>{
    
        let rev=string.split("").reverse().join("")
        if(string===rev)
        return true;
        
}

let printPalindromes = (arr)=> {
    let res=[]
  for (const str of arr) {
    if(palindrome(str)) {
      res.push(str)  
      console.log(res);
    }
  }
}
printPalindromes(strings);

//Remove duplicates from an array

let array = [1,2,3,3,4,4,4,5]

let removeDupes = ()=>{
    let unique = [...new Set(array)]
    console.log(unique)
}
removeDupes(array);

//Rotate an array by k times

let rotateArray = (arr, k)=> {
  
    for (let i = 0; i < k; i++) {
      const element = arr.shift(); 
      arr.push(element);
     }
  }
  const myArray = [1, 2, 3, 4, 5];
  const rotations = 3;
  rotateArray(myArray, rotations);//imp
  console.log(myArray);
  
//Return median of two sorted arrays of the same size.

let arr1=[1,2]
let arr2=[6,4]
let median = (arr1,arr2)=>{
    let sort1=arr1.sort()
    let sort2=arr2.sort()
    let merged = [...arr1,...arr2]
    console.log(merged)
    let mid=(sort1[sort1.length-1])+(sort2[sort2.length-1])
    console.log(mid/2)
}
median(arr1,arr2)

//title caps in string array

let title_caps = (str)=> {
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