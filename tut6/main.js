// --------------------------------- selection shoot ----------------------------------

let arr = [3,23,4,5,56]


for(let i = 0; i<arr.length-1;i++){
    let max = i //3
    for(let j = i+1; j<arr.length;j++){//4
        if(arr[max]<arr[j]){
            max = j //3
        }
    }
    console.log(arr)
    var temp = arr[i]
    arr[i] = arr[max]
    arr[max]= temp
}
// console.log(arr)

// --------------------------------------------
// let arr = [1,2,3,4,5,6,4]
// let target = 6
// let count = 0

// for (let i = 0; i < arr.length-1; i++) {  
//     for (let j = i+1; j < arr.length; j++) { 
//         if((arr[i]+arr[j])==6){
//             if(count>0){
//                 break
//             }
//             console.log(i)
//             console.log(j)
//             console.log('yes')
//             count++
//         }
        
//     }
    
    
// }


// for (let i = 0; i < arr.length-1; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if((arr[i]+arr[j])==6){
//             if(count>0){
//                 break
//             }
//             console.log(i)
//             console.log(j)
//             console.log('yes')
//             count++
//         }
        
//     }
    
    
// }


// --------------------- find 2 index which value  add then equal to target value

// let arr = [1,2,3,4,5,6,4]
// let target = 6
// let k = 0
// for (let i = 1; i < arr.length; i++) {
//     if(arr[k]+arr[i]==6){
//         console.log(k)
//         console.log(i)
//     }


    
// }






