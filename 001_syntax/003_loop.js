/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for (let i = 0; i < 11; i++) {
    return i;
  }
  console.log(i);
}
console.log(printOneToTen());

//or
function printOneToTen2() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
  }
}
console.log(printOneToTen2());



/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */
function printOneToTenDesc1(a, b) {
  return b - a;
}
let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numArr.sort(printOneToTenDesc1);
console.log(numArr);

// or
function printOneToTenDesc() {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.sort(function(a, b) {
    return b - a;
  });
  console.log(numbers);
}
console.log(printOneToTenDesc());

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

// while (条件式) {
// 繰り返し処理
// }

function printOneToTenWhileDesc() {
  let count = 0;
  while (count < 11) {
    console.log(count);
    count++;
  }
  console.log(count);
}
console.log(printOneToTenWhile());




// function printOneToTenWhile() {
//     let result = '';
//     let i = 0;
//     do{
//       // statement
//       i += 1;
//       result += i;
//     } while (i < 11);
//     // while (condtion)
//     console.log(result)
// }
// console.log(printOneToTenWhile());

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  let arrNum = [0,3,4,6,7,8,5,1,2,9,10];
  let arrBox = [];
  let i;
  while (i < 11) {
    console.log(count);
  }
  arrBox.sort(
    function(a,b){
      return b - a;
    }
  );
  console.log(arrBox)
}
console.log(printOneToTenWhile());


module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
