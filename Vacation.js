function vacation(input){
    const neededMoney = Number(input[0]);
    let money = Number(input[1]);
    let indexText = 2
    let indexPrice = 3
    let spendDays = 0;
    let totalDays = 0;
    
    while (indexPrice <= input.length){
        const operation = input[indexText];
        const amount = Number(input[indexPrice]);
        if (spendDays >= 5){
            console.log("you can't save the money.")
            console.log(totalDays)
            return
        }
        else if (money >= neededMoney){
            console.log(`You saved the money for ${totalDays} days.`)
            return
        }
        if (operation === "spend"){
            money -= amount;
            totalDays ++;
            spendDays ++;
            if (money < 0){
                money = 0;
            }
        }
        else if (operation === "save"){
            money += amount;
            totalDays++;
            spendDays = 0;
        }
        indexText += 2;
        indexPrice += 2;
    }
    if (money >= neededMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(totalDays);
    }

}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])


