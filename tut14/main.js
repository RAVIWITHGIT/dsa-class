// -------------- add two array and sort asending

// let arr = [1,2,4,7,9]
// let arr2 = [5,6]

// let p1 = 0;
// let p2 = 0;

// let narr = []
// while(p1<arr.length && p2<arr2.length){
//     if(arr[p1]<arr2[p2]){
//         narr.push(arr[p1])
//         p1++

//     }
//     else{
//         narr.push(arr2[p2])
//         p2++
//     }

// }

// while(p1<arr.length){
//     narr.push(arr[p1]);
//     p1++
// }

// while(p2<arr2.length){
//     narr.push(arr2[p2])
//     p2++
// }
// console.log(narr)

// ----------------- add two array in new array and sort desending

// let arr = [1,2,4,7,9]
// let arr2 = [5,6]

// let p1 = arr.length-1;
// let p2 = arr2.length-1;

// let narr = []
// while(p1>=0 && p2>=0){
//     if(arr[p1]>arr2[p2]){
//         narr.push(arr[p1])
//         p1--

//     }
//     else{
//         narr.push(arr2[p2])
//         p2--
//     }

// }

// while(p1>=0){
//     narr.push(arr[p1]);
//     p1--
// }

// while(p2>=0){
//     narr.push(arr2[p2])
//     p2--
// }
// console.log(narr)



// ---------------------------**************** add two array without make new array and sort()

// ---> note this code only run for arr , if we change name mean arr--> arr2 and arr2--> arr then give error,this solution see in below in this code


// let arr = [1,2,4,7,9]
// let arr2 = [5,6]

// let p1 = arr.length-1;
// let p2 = arr2.length-1;
// let k = arr.length+arr2.length-1
// arr.length = k




// while(p1>=0 && p2>=0){
//     if(arr[p1]>arr2[p2]){
//         arr[k] = arr[p1]
//         p1--
//         k--

//     }
//     else{
//         arr[k] = arr2[p2]
//         p2--
//         k--
//     }

// }


// console.log(arr)

// ---------------------------------------- solution of upper code if we change varible name also run code

// let arr = [1,2,3,4,5,6]
// let arr2 = [7,8]

// let p1 = arr.length-1
// let p2 = arr2.length-1

// let k = arr.length+arr2.length-1

// while(p2>=0 && p1>=0){
//     if(arr[p1]>arr2[p2]){
//         arr2[k] = arr[p1]
//         p1--
//         k--

//     }
//     else{
//         arr2[k] = arr2[p2]
//         p2--
//         k--
//     }
// }

// while(p2>=0){
//     arr2[k] = arr2[p2]
//     k--
//     p2--
// }
// while(p1>=0){
//     arr2[k] = arr[p1]
//     k--
//     p1--
// }

// console.log(arr2)