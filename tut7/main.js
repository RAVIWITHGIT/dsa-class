// let arr = [1,2,3,4,5,6,7,8];

// let s = 0
// let e = arr.length-1

// while(s<e){
//     if(arr[s]+arr[e]==7){
//         console.log('s is',s)
//         console.log('e is',e)
//         s++
//         e--
//     }
//     else if(arr[s]+arr[e]>7){
//         e--
//     }
//     else{
//         s++

//     }
// }



// ------------------------ array intersection -------------------------
// let arr1 = [1,2,3,4]
// let arr2 = [3,4]
// let narr = []

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if(arr1[i]==arr2[j]){
//             narr.push(arr1[i])
//         }
        
//     }
    
// }
// console.log(narr)



// ----------

// this question only work positive number

// let arr1 = [1,2,3,4,4]
// let arr2 = [3,4,4]
// let narr = []

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
        
//         if(arr1[i]==arr2[j]){
//             narr.push(arr1[i])
//             arr1[i]= -1
//             arr2[j] = -1
//         }
        
//     }
    
    
// }
// console.log(narr)


// -----------

// let arr1 = [1,2,3,4,4]
// let arr2 = [3,4,4]
// let narr = []
// let count = 0

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if(arr1[i]<arr2[j]){
//             break
//         }
//         if(arr1[i]==-1){
//             break
//         }
//         count++
//         if(arr1[i]==arr2[j]){
//             narr.push(arr1[i])
//             arr1[i]= -1
//             arr2[j] = -1
//         }
        
//     }
    
    
// }
// console.log(narr)
// console.log(count)

