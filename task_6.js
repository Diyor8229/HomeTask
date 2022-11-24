// Задание 1 ======================
  


//const user = {};
  
//user.name = "John";
//user.surname = "Smith";
//user.name = "Pete";
//delete user.name;
//console.log(user);
//const ishla = () => {

// Действие 

//};
   
//const xisoblabBer = (num, num1) => {
// let num3 = num + num1;
//  return num3;
//};
//let result = xisoblabBer(50, 50);
//console.log(result);



// Задание 2 ======================



// let schedule = {};

// const isEmpty = (obj) => {
//   for (let i in obj) {
//     return false;
//   }
//   return true;
// };

// console.log(schedule);
// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up";

// console.log(schedule);
// console.log(isEmpty(schedule));



// Задание 3 ======================



// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = null;

// for (let i in salaries) {
//   sum += salaries[i];
// }

// console.log(sum);



// Задание 4 ======================



// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log(menu);

// const multiplyNumeric = (obj) => {
//   for (let i in obj) {
//     if (typeof obj[i] == "number") {
//       obj[i] *= 2;
//     }
//   }
// };

// multiplyNumeric(menu);

// console.log(menu);



// Дополнительные Задания ======================

// Задание 1 ======================



// object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id,name

// let obj = {
//   id: 1,
//   name: "WebBrain",
// };

// for (let i in obj) {
//   console.log(i);
// }



// Задание 2 ======================



// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   num: 2546,
// };

// for (let i in obj) {
//   if (typeof obj[i] == "number") {
//     console.log(i);
//   }
// }



// Задание 3 ======================



// object valuelarining boolean tipidagi malumotlrini qaytaring key lari bn biriga

// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// let booleanObj = {};

// for (let i in obj) {
//   if (typeof obj[i] == "boolean") {
//     booleanObj[i] = obj[i];
//   }
// }

// console.log(booleanObj);



// Задание 4 ======================



// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// function Search(obj,str){}
// Search(obj,'WebBrain')
// chiqish
//     name:"WebBrain"

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   surname: "Sobirov",
//   individual: false,
// };

// function Search(obj, str) {
//   for (let i in obj) {
//     if (obj[i] === str) {
//       console.log(`${i}: ${obj[i]}`);
//     }
//   }
// }

// Search(obj, "Sobirov");



// Задание 5 ======================



// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }
// searchValue(obj,'i') => atirgul,qizil

// let user = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   ggg: "dskf",
//   price: "10$",
// };

// let user3 = {
//   id: 1,
//   name: "atirl",
//   color: "qighzil",
//   count: 10,
//   ggg: "dskf",
//   price: "10$",
//   fdf: 20,
//   dfgdfg: "dsfsd",
// };

// let user50 = {
//   id: 1,
//   name: "atirl",
//   color: "qighzil",
//   count: 10,
//   ggg: "dskf",
//   price: "10$",
//   fdf: 20,
//   dfgdfg: "dsfsd",
// };

// const searchValue = (obj) => {
//   for (let i in obj) {
//     if (typeof obj[i] == "string") {
//       console.log(obj[i]);
//     }
//   }
// };

// searchValue(user50);
