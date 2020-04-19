
function checkNum(num){
  let newArr =[];
  for(i = 1; i <= num; i++){ 
    if(i % 2 === 0){
    newArr.push(`yu`)
    }else if(i % 3 === 0){
      newArr.push(`gi`)
    }else if(i % 5 === 0){
        newArr.push( `oh`)
    }else if(i % 2 === 0 && i % 3 === 0 ){
      newArr.push(`yu-gi`)
    }else if(i % 2 === 0 && i % 5 === 0 ){
      newArr.push(`yu-oh`)
    }else if(i % 3 === 0 && i % 5 === 0 ){
      newArr.push(`gi-oh`)
    }else if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
      newArr.push(`yu-gi-oh`)
    }else  (newArr.push(i))
}
return newArr;
}

console.log(checkNum(100));
console.log(checkNum(30));