function add(input) {
  let index = 0;
  let sumFirst = 0;
  let newAray = [];
  let sumLast = 0;
  input.forEach((element) => {
    sumFirst += element
  });
  

  for (index; index < input.length; index++){
    if (input[index] % 2 === 0){
        newAray.push((input[index] + index))
    }
    else if (input[index] % 2 !== 0){
        newAray.push((input[index] - index))
    }
    
  }
  newAray.forEach((element) => {
    sumLast += element
  });
  console.log(newAray)
  console.log(sumFirst)
  console.log(sumLast)
}

add([5, 15, 23, 56, 35]);
