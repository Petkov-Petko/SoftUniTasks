function cake(input) {
  let totalPices = Number(input[0]) * Number(input[1]);
  let index = 2;
  let diff;

  while (input[index] !== "STOP") {
    totalPices -= Number(input[index]);

    if (totalPices < 0) {
      console.log(
        `No more cake left! You need ${Math.abs(totalPices)} pieces more.`
      );
      return;
    }

    index++;
  }
  console.log(`${totalPices} pieces are left.`);
}

cake(["10", "2", "2", "4", "6", "STOP"]);
