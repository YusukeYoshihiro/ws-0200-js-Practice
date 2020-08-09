/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }
}
console.log(printOneToTen());


/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */
function printOneToTenDesc() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}
printOneToTenDesc();


// or
// function printOneToTenDesc() {
//   let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   numbers.sort(function (a, b) {
//     return b - a;
//   });
//   console.log(numbers);
// }
// console.log(printOneToTenDesc());

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

// while (条件式) {
// 繰り返し処理
// }

function printOneToTenWhile() {
  let count = 0;
  while (count <= 10) {
    console.log(count);
    count++;
  }
}
printOneToTenWhile();




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

function printOneToTenWhileDesc() {
  let i = 10;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
console.log(printOneToTenWhileDesc());


module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
