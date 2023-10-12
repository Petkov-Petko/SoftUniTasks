function walking(input) {
  let index = 0;
  let totalSteps = 0;
  let diff;
  while (index <= input.length) {
    
    if (input[index] === "Going home") {
      totalSteps += Number(input[index + 1]);
      if (totalSteps >= 10000) {
        diff = Math.abs(10000 - totalSteps);
        console.log(`Goal reached! Good job! 
${diff} steps over the goal!`);
        return;
      } else if (totalSteps < 10000) {
        diff = Math.abs(10000 - totalSteps);
        console.log(`${diff} more steps to reach goal.`);
      }
    }
    totalSteps += Number(input[index]);
    if (totalSteps >= 10000) {
      diff = Math.abs(10000 - totalSteps);
      console.log(`Goal reached! Good job!
${diff} steps over the goal!`);
      return;
    }

    index++;
  }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])


