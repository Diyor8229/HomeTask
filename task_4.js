//  Задание 1  ======================



// let browser = "Chrome";
// switch (browser) {
//   case "Edge":
//     console.log("You've got tje Edge");
//     break;
//   case "Chrome":
//   case "FireFox":
//   case "Safari":
//   case "Opera":
//     console.log("Okay we support these browsers too");
//      break;
//      default:
//     console.log("We hope that this page looks ok!");
// }



//  Задание 2 ======================



// let a = 1;
// if (a == 0) {
//   console.log(0);
// }
// if (a == 1) {
//   console.log(1);
// }
// if (a == 2 || a == 3) {
//   console.log("2,3");
// }



//  Задание 3 ======================



// let num = 20;
// for (let i = 1; i <= num; i++) {
//   let check = 0;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       check = 1;
//       break;
//     }
//   }
//   if (i > 1 && check == 0) {
//     console.log(i);
//   }
// }



//  Задание 4 Таблица умножения ======================



// for (let i = 2; i <= 9; i++) {
//   console.log("===========");
//   console.log(`${i} Karra`);
//   console.log("===========");
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }