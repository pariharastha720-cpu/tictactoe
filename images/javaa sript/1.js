// const product = {
//     name : "ball pen",
//     rating : 4.2,
//     price : 138,
// };
// console.log(product);

// const profile ={
//     username : "astha",
//     followers :200,
//     post : 1 ,
//     bio : "nothing",
// };
// console.log(profile);

// Password = prompt("create your passkey");
// Passkey = "@"+ Password;
// console.log ("your password=",Passkey);
let n = prompt("enter :");
let arr =[];
for (let i =1 ; i<=n ; i++){
    arr[i-1]=i;
};
console.log(arr);
const sarr = arr.reduce((prev , curr) => {
    return prev + curr;
});
console.log(sarr);
// console.log(sarr/arr.length);
const Aarr = arr.reduce((prev,curr)=>{
    return prev+ curr / arr.length;
});
console.log(Aarr);