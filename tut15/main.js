
// ---------------------- find the largest length of charector

// let str = 'this is sentence'

// let narr = str.split(' ')
// let getlen = 0
// let char = ''

// for(let i of narr){
//     if(getlen<i.length){
//         getlen = i.length
//         char = i
//     }
// }
// console.log(narr)
// console.log(getlen)
// console.log(char)

// ------------------------------------------------------- reduce() method------------------------------------
// find largest length
// let arr = ["this","is","sentence"]

// let largest = arr.reduce((acc,cv)=>{
//     if(acc.length<cv.length){
//         return cv
//     }else{
//         return acc
//     }

// },arr[0])

// console.log(largest)

// ------smallet value
// let arr = ["this","is","sentence"]

// let largest = arr.reduce((acc,cv)=>{
//     if(acc.length>cv.length){
//         return cv
//     }else{
//         return acc
//     }

// },arr[0])

// console.log(largest)

// -----------------
// let arr = [1,2,3,4,5]

// let largest = arr.reduce((acc,cv)=>{
//     console.log(acc*cv)
//     return acc

// },5)


// ---------------
// let arr = [1,2,3,4,5]

// let largest = arr.reduce((acc,cv)=>{
//     // console.log(acc*cv)
//     return cv*acc

// },5)
// console.log(largest)


// -------------------- sovle how reduce function run
// let reduce = (arr,acc)=>{

//     var intial = acc
//     for(let i of arr){
//         intial = i*intial
//     }
//     return intial
// }

// let ans = reduce([1,2,3,4,5],5)
// console.log(ans)


// ----------------------------------------------- ********************khadani algorithim *****************-------------------
// ------------- find largest sum
// let arr = [1,2,3,4,5,-6]

// let max = arr[0]
// let sum = 0;

// for(let i in arr){
//     sum = sum+arr[i]
//     max = Math.max(sum,max)

//     if(sum<0){
//         sum = 0
//     }
// }
// console.log(max)


// ----
// let arr = [-4,-6,-3,-7]

// let max = arr[0]
// let sum = 0;

// for(let i in arr){
//     sum = sum+arr[i]
//     max = Math.max(sum,max)

//     if(sum<0){
//         sum = 0
//     }
// }
// console.log(max)