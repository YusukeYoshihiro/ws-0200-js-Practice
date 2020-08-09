/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */ 
// 出力する・表示するといったものはconsole.log
function helloWorld() {
  console.log("Hello World"); 
}
helloWorld();



/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
// 出力する・表示するといったものはconsole.log
function displayConst() {
  const str1 =  "hoge";
  console.log(str1);
}
displayConst();

/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
// 出力する・表示するといったものはconsole.log
function displayLet() {
  let str2 = "hoge";
  console.log(str2);
}
displayConst();

/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */
function displayArgument(arg) {
  let x = `${arg}`;
  console.log(x);
}
displayArgument("Yusuke");

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
// 返却する・返すといった指定のあるものはreturn
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
  //  Math.floor(x) => 引数として与えた数以下の最大の整数を返します。
  var quotient = Math.floor( a / b );
  if(a === 0 || b === 0) {
    return null;
  }else{
    return quotient;
  }
}
// console.log(quotientTwoArgs(100,2));

// Aroow ver.
quotientTwoArgs2 = (a,b) => {
  let quotient2 = Math.floor(a / b);
  if( a == 0 || b == 0 ){
    return null;
  }else{
    return quotient2;
  }
}
// console.log(quotientTwoArgs2(100,2));


/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
    let product = a * b;
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
  let multiples = a % 2;
  let x = multiples;
  if (x == 0){
     return true;
  } else {
    return false;
  }
}
console.log(isEven(10))

/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a,b) {
 return a.concat(b);
}
console.log(concatString("yusuke","Yoshihiro"));


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
