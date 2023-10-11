function exam(input) {
  const badGrade = Number(input[0]);
  let goodGrades = 0;
  let badGrades = 0;
  let sum = 0;
  let lastTask = "";
  let index = 1;

  while (true) {
    let task = input[index];
    if (task === "Enough") {
      let average = sum / (goodGrades + badGrades);
      console.log(`Average score: ${average.toFixed(2)}`);
      console.log(`Number of problems: ${goodGrades + badGrades}`);
      console.log(`Last problem: ${lastTask}`);
      break;
    }

    let score = Number(input[index + 1]);
    sum += score;
    lastTask = task;

    if (score <= 4) {
      badGrades++;
      if (badGrades >= badGrade) {
        console.log(`You need a break, ${badGrades} poor grades.`);
        return;
      }
    } else {
      goodGrades++;
    }

    index += 2;
  }
}

exam([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
