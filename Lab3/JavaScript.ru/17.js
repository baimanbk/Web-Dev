function sum(obj){
    if(obj === salaries){
        return 0;
    }
    let sum = 0;
    for(let key in obj){
        sum += obj[key];
    }
    return sum;
}