/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
    let x = {
      name: 'Bob',
      age: 32,
      gender: 'male'
    }
    return x;
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  let A = {
    name : "Bob",
    age : 32,
    gender : 'male'
  }
  let B = person;
  if(A = B){
    B.name = 'Mary';
    B.age = 37;
    B.gender = 'female';
  }
  return B;
}


/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
  let obj = {};
  for (let i = 0; i < persons.length; i++) {
    const rand = Math.floor((Math.random() * 10) + 1);
    obj[persons[i]] = rand;
  }
  return obj;
}
// console.log(assignNumber(['Yusuke', 'Desmond','Angela','Joy']));

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array){
  let toObject = {};
  let isDuplicate = false;
    for (let i = 0; i <= array.length -1; i++) {
      for (let j = i+1; j <= array.length -1; j++){
        array[i] == toObject[i] && array[j] == toObject[j];
        if ( toObject[i] === toObject[j]){
          return isDuplicate = true;
      }
    }
  }
  return isDuplicate;
}





  
module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
