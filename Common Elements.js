function common(input1, input2) {
  input1.forEach((element) => {
    input2.forEach((element2) => {
        if (element === element2){
            console.log(element)
        }
    })
  });
}

common(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
