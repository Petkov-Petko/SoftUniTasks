function travelPlans(input) {
  let i = 0;

  while (i < input.length) {
    const destination = input[i];
    if (destination === "End") {
      break;
    }

    const budget = parseInt(input[i + 1]);
    let savings = 0;
    let j = i + 2;
    while (savings < budget) {
      if (input[j] === undefined) {
        break;
      }
      savings += parseInt(input[j]);
      j++;
    }

    if (savings >= budget) {
      console.log(`Going to ${destination}!`);
    }

    i = j;
  }
}

travelPlans([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
