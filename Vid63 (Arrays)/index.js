/*
tostring
join
pop
push
shift
unshift
delete
concat
sort
splice
slice
reverse
*/
/*
foreach
map
filter
reduce
array from
for in
for of
*/

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// console.log(arr.toString())

// console.log(arr.join(" "))

// arr.pop(5);
// console.log(arr);

// arr.push(6);
// console.log(arr);

// delete(arr[2]);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("S");
// console.log(arr);

// let a=[1,2,3];
// let b=[4,5,6];
// let c=[7,8,9];
// console.log(a.concat(b,c));

// let array=[45,23,78,56,94,21,88];
// console.log(array.sort())
//     // or
// console.log(arr.sort((a,b)=>a-b));

// console.log(arr.splice(1,3));
// console.log(arr);

// console.log(arr.slice(1,3));
// console.log(arr);

// console.log(arr.reverse());

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.forEach((value,index,arr) => {
//     console.log(value,index,arr)
// });

// let object = {
//     1:"qwe",
//     2:"asd",
//     3:"zxc"
// }
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
//     const element = object[key];
//     console.log(key)
// }

// let object = "sahil";
// for (const key of object) {
//   console.log(key);
// }

// const arr = [1, 2, 3, 4, 5];
// const newarray=arr.map((value,index,arr)=>{return value*value})
// console.log(newarray)

// const arr = [1, 2, 3, 4, 5];
// const func = (arr) => {
//     if (arr>3){
//         return true;
//     }
//     else{
//         return false;
//     }
// };
// console.log(arr.filter(func))

// const arr = [1, 2, 3, 4, 5,6];

// const add = (a, b) => {
//   return a * b;
// };

// let sum = arr.reduce(add);
// console.log(sum);

console.log(Array.from("irfan"));
