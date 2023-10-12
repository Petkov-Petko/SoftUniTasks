

  function rotation(input, rotations){
   const length = input.length;
   const newRotations = rotations % length;
    const output = input.slice(newRotations).concat(input.slice(0, newRotations))
    console.log(output.join(" "))
  }

  rotation([2, 4, 15, 31], 5)

