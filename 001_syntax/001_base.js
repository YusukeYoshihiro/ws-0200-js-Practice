/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  return `Hello World`;
}
helloWorld();

/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayConst() {
  const str1 = "hoge";
  return str1;
}
displayConst();

/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayLet() {
  let str2 = "hoge";
  return str2;
}
displayConst();

/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */
function displayArgument(arg) {
   return `${arg}`
}
displayArgument("Yusuke");

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function sumTwoArgs(a, b) {
  return a + b ;
}
sumTwoArgs(1,2);

// Arrow ver.
sumTwoArgs2 = (x,y) => x + y; 
console.log(sumTwoArgs2(1,2));

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(x, y) {
  return x - y;
}
console.log(subtractTwoArgs(3, 2) )

// Arrow ver.
subtractTwoArgs2 = (x,y) => x - y; 
console.log(sumTwoArgs2(3,2));

/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください。0での割り算はnullを返却してください。
 *
 */
function quotientTwoArgs(a,b) {
  var quotient = a / b ;
  return quotient;
}
console.log(quotientTwoArgs(100,2));

// Aroow ver.
quotientTwoArgs2 = (a,b) => {
  let quotient2 = a / b;
  return quotient2;
}
console.log(quotientTwoArgs2(100,2));


/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
    var product = a * b;
    return product; 
}
console.log(productTwoArgs(5,3));


/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  var remainder = a % 2;
  return remainder;
}
console.log(remainderTwoArgs(1));

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  var multiples = a % 2;
  return multiples = 0;
}
console.log(isEven(10))

/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a, b) {
  return `My name is ${a} + " " + ${b}`;
}
concatString("Yusuke", "Yoshihiro")

module.exports = {
  helloWorld,
  displayConst,
  displayLet,
  displayArgument,
  sumTwoArgs,
  subtractTwoArgs,
  quotientTwoArgs,
  productTwoArgs,
  remainderTwoArgs,
  isEven,
  concatString
}
