/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  let str = "Yusuke is awesome.";
  console.log(`${str.length}`);
}
console.log(length(str));


/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  let str = "YusukeYoshihiro";
  let i = str.length;
  if((i %2 )= 0){
    return true;
  }
  console.log(i);
}
console.log(lengthIsEven(str));

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  let str = "Hello World!";
  let word = str.charAt(0);
  console.log(word);
} 
console.log(firstChar(str));

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  let str = "Hello World!";
  let word = str.slice(-1);
  console.log(word);
} 
console.log(firstChar(str));




/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

// The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.



function substring(str, a, b) {
    let str = "";
    let subStr = str.substr(a,b);
    console.log(subStr);
}
console.log( substring("Yusuke", 1, 2));


/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

function isInclude(a, b) {
  let a = "Jiro-San is Awesome";
  let b = "Jiro";
  let isInclude = a.includes(b);
  return isInclude(isInclude);
}
console.log(isInclude(a, b));


/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function printByChar(str) {

}


module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar
}
