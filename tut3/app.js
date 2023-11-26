console.log('hello ravi')
//--------------------- binary search -----------------------------------

//  here discuss how number search in array

let arr = [4,3,5,2,1]
arr.sort()

// after sort()
// let arr = [1,2,3,4,5]

let f = 0  
let s = arr.length-1

let find = 8

while(f<=s){
    const med = Math.floor((f+s)/2)
    console.log(med)  
    if(arr[med]==find){
        console.log(true)
        break
    }
    if(find>arr[med]){
        f = med+1
    }
    else{
        s = med-1
    }
}


