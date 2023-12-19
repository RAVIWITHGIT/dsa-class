//Q2
// let arr = [1,2,3,4,5]

// let find = 3
// let s = 0
// let e = arr.length-1
// let i = 0
// while(i<arr.length){
//     let med = Math.floor((s+e)/2)
//     console.log('med',med)
//     if(arr[med]==find){
//         console.log('yes')
//         break
//     }
//     if(arr[med]>find){
//         e = med-1
//     }
//     else{
//         s = med+1
//     }
//     i++
// }

//Q1
// let arr = [3,1,6,2,7,8]

// let s = 0
// let e = arr.length-1

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//         if(arr[i]<arr[j]){

//         }else{
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//             console.log(j,arr)

//         }
        
//     }
    
// }
// console.log(arr)

//Q3

// let num = 12345
// let s = 0
// while(true){
//     let m = num%10
//     if(m==0){
//         break
//     }
//     s = s*10+m
//     num = Math.floor(num/10)

// }
// console.log(s)

//Q4
// let arr = [1,2,3,4,5]

// let med = Math.floor(arr.length/2) 
// let s = 0
// let e = 1

// while(s<med){ 
//     let temp = arr[s]  
//     arr[s] = arr[arr.length-e]
//     arr[arr.length-e] = temp
//     s++
//     e++
// }
// console.log(arr)