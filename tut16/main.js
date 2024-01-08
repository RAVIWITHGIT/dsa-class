// ----------------find second largest value

// let arr = [18,29,14,7,2]

// let max1 = 0
// let max2 = 0

// for(let i of arr){
//     if(i>max1){
//         max2 = max1
//         max1 = i

//     }else if(i>max2){
    //         max2 = i
    //     }
    // }
    
    // console.log(max1)
    // console.log(max2)
    
// --------------------------- recursion ---------------------------------------------------------------

// function rec(n){
//     if(n==0){
//         return
//     }
//     console.log(n)
//     rec(n-1)
// }


// function rec(n){
//     if(n==0){
//         return
//     }
//     rec(n-1)
//     console.log(n)
// }

// rec(5)



// -------------------------------
// function rec(n){

//     if(n==1){
//         return 1
//     }

//     return n+rec(n-1)
    
// }

// console.log(rec(5))

// ------- how upper code run 

// function rec(n){

//     if(n==1){
//         return 1
//     }

//     let dv = n+rec(n-1)
//     console.log('dv',dv)
//     console.log('n',n)
//     return dv
    
// }

// console.log(rec(5))

// ---------------------fibonacci series

// let a = 3
// let b = 5
// for (let i = 0; i < 10; i++) {
//     let c = a+b;
//     console.log(c)
//     a=b;
//     b = c;
    
// }



