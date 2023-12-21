// -------------------------- find first occurence
// let arr = [1,2,3,4,4,4,4,5,6]


// let s = 0
// let e = arr.length-1

// while(s<=e){
//     var mid = Math.floor((e+s)/2)

//     if(arr[mid]==4){
//         console.log('first occurance index is',mid)
//         e = mid-1
//     }
//     else if(arr[mid]>4){
//         e = mid-1
//     }
//     else{
//         s = mid+1
//     }
// }
// console.log(mid)

// ----------------------------- last occurence
// let arr = [1,2,3,4,4,4,4,5,6]


// let s = 0
// let e = arr.length-1

// while(s<=e){
//     var mid = Math.floor((e+s)/2)

//     if(arr[mid]==4){
//         console.log('last occurance index is',mid)
//         s = mid+1
//     }
//     else if(arr[mid]>4){
//         e = mid-1
//     }
//     else{
//         s = mid+1
//     }
// }
// console.log(mid)


// ------------------------------------ peek value of mountaine
let arr = [1,2,3,4,5,6,7,6,5,4,3]

let i = 0
while(true){
    if(arr[i]<arr[i+1]){
        i++
    }
    else{
        console.log(arr[i])
        break
    }
}