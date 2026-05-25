//const arrowMul=(a,b)=>{
//    return(a*b); 
// }
// const arrowS=()=>{
//     console.log("hello astha");
// }
// let arr = ["de","ds","cnsis","anhj"];
// arr.forEach((val)=> {

//     console.log(val.toUpperCase);
// });
// let a =[7,5,4,33,23];
// a.forEach((num,i,arr)=>{
//     console.log(num**2,i,arr);
// });
// let num =[34,5,6,3,5,34];
// let newNum = num.filter((val)=>{
//  return num%2!== 0;
// });
// console.log(newNum);
// let arr = [1,3,4,6,7,65,76,79];
// const arr1 = arr.reduce((prev,curr) =>{ // largest
//     return prev > curr ? prev : curr;// smallest  prev < curr 

// });
// console.log(arr1);
let marks = [67,89,93,92,94,91];
const emarks = marks.filter((val)=>{
    return val > 90;
});
console.log((emarks));