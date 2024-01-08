// --------------------- recursion with fibonacci series

// function fibonacci(n,a,b){
//     if(n==0){
//         return
//     }
//     let c = a+b
//     console.log(c)
//     a=b
//     b=c
//     fibonacci(n-1,a,b)

// }

// fibonacci(10,3,5)


// let a = 0;
// let b = 1;

// console.log(a)
// console.log(b)

// let test = (n,a,b)=>{
//     if(n==1){
//         return
//     }
//     let c = a+b
//     console.log(c)
//     test(n-1,b,c)
// }
// test(10,a,b)


// ------------------- sum of recursion series

// let a = 0;
// let b = 1;

// console.log(a)
// console.log(b)

// let test = (n,a,b)=>{
//     if(n==1){
//         return 1
//     }
//     let c = a+b
//     let ans = test(n-1,b,c)
//     ans+=c
//     return ans
// }
// console.log('ans',test(10,a,b))