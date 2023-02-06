//Task 1
function getMinOfArray(input) {

    if (toString.call(input) !== "[object Array]")
        return false;
    return Math.min.apply(null, input);
 }
 console.log('Ваш Результат ' + getMinOfArray([1, 22, 56, 7, 9, 4, 21, 57]));
 
 
 //Task 2
 function getMaxOfArray(input) {
 
    if (toString.call(input) !== "[object Array]")
        return false;
    return Math.max.apply(null, input);
 }
 console.log('Ваш Результат ' + getMinOfArray([1, 22, 56, 7, 9, 4, 21, 57]));
 
 
 //Task 3
 function getMaxIndexOfArray(input){
    const max = Math.max(...input);
    const index = input.indexOf(max);
    return index;
 }
 console.log('Ваш Результат  '+ getMaxIndexOfArray([1, 22, 56, 7, 9, 4, 21, 57]));
 
 //Task 4
 function getMaxIndexOfArray(input){
    const min = Math.min(...input);
    const index = input.indexOf(min);
    return index;
 }
 console.log('Ваш Результат  ' +getMaxIndexOfArray([1, 22, 56, 7, 9, 4, 21, 57]));
 
 //Task 5
 function getSumOfOdd(input){
    let oddSumm = 0;
    let evenSumm = 0;
 
    for(let i = 0; i < input.length; i++){
        const n = input[i];
        if (i % 2 === 0){
            evenSumm +=n;
        }else{
            oddSumm +=n;
        }
    }
    return Math.abs(oddSumm - evenSumm);
 }
 console.log('Ваш Результат  ' +getSumOfOdd([1, 22, 56, 7, 9, 4]));

 //Task 6
 function reverse(arr){
    return arr.reverse();
 }
 console.log('Ваш Результат  ' +reverse( [1, 22, 56, 7, 9, 4]));
 
 //Task 7
 function countOfOdd(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i]
        }
    }  return sum;
 }
 console.log('Ваш Результат  ' + countOfOdd([1, 22, 56, 7, 9, 4]));
 