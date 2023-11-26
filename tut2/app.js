console.log('hello')
// let a = 20
// let b = 20
// console.log(a++)
// console.log(++b)


// -------------------------------------------------------------------------------
// find uniqe element

let arr = [1,1,2,3,3]

for (let i of arr){
    let count =-1
    for(let j of arr){
        if(i==j){
            count++
        }
    }
    if(count==0){
        console.log('uniqe element',i)
        break
    }
}


