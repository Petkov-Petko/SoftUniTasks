function merge(input1, input2) {
  let newArray = [];

  for (let index = 0; index < input1.length; index++) {
    if (index % 2 === 0) {
      newArray.push(Number(input1[index]) + Number(input2[index]) + " - ");
    } else if (index % 2 !== 0) {
      newArray.push(input1[index] + input2[index] + " - ");
    }
  }

  
  console.log(newArray.join("").slice(0, -2));
}

merge(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
