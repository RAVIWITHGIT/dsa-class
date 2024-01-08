
function myfun(value,power){
    if(power==1){
        return value
    }
    let s = value*myfun(value,power-1)
    // console.log('s',s)
    return s

}

console.log(myfun(2,5))