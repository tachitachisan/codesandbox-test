/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// const val4 = {
//   name: "てすと",
//   age: 28
// };
// val4.name = "tetete";
// val4.address = "kkkk";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "たろう";
// const age = 28;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const func2 = (str) => str;
// console.log(func2("func2です"));

// const arr1 = [1, 2];

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [20, 40];

// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

const nameArr = ["太郎", "次郎", "三郎"];
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "三郎") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
