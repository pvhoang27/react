// // const myArray = ['apple', 'banana', 'orange'];
// // const myList = myArray.map((item) => `<p>${item}</p>`)

// // console.log(myList);
// // console.log(myArray);

// const myArray = [1, 2, 3, 4, 5];
// const myList = myArray.map((item, index) => {
//   console.log(item,index)
//   return item * 2;
// });

// console.log(myList);
// // console.log(myArray);

const age = [32, 33, 16, 40];
// const result = age.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

const result = age.filter((item) => {
  return item >= 18;
})

console.log(result);