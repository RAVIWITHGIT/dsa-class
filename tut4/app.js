// let a = 2
// let b = 5
// let c = b
// b = a
// a = c
// console.log(a)
// console.log(b)


// ----------------------------- bubble sort ------------------------------------

// know about how to run sort() function run

let arr = [6,4,5,8,2,1,9]

let count = 0
for(let i in arr){ 
    for (let j = 0; j < arr.length-1-i; j++) { 
        if(arr[j]<arr[j+1]){


        }
        else{
            let temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp
        }
        // console.log(arr)
        count++
        
    }
    // console.log(count)
}
console.log(arr)

// how we can reverse number in dsa

// let num = 123455
// let newstr = num+""

// for (let i = newstr.length-1; i >= 0; i--) {
//     const element = newstr[i];
//     console.log(element)
    
// }

// --reverse number using % and / sign

// let num = 123456

// while(true){
//   if(num==0){
//     break
//   }
//   console.log(num%10)
//   num = Math.floor(num/10)
  
// }