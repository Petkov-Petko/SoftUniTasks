function coins(input) {
    let change = parseFloat(input[0]); 
    let monet = change * 100; 
    let twoLv = 0;
    let oneLv = 0;
    let fiftySt = 0;
    let twentySt = 0;
    let tenSt = 0;
    let fiveSt = 0;
    let twoSt = 0;
    let oneSt = 0;

    if (monet >= 200){
        twoLv = Math.floor(monet / 200)
        monet %= 200
    }
    if (monet >= 100){
        oneLv = Math.floor(monet / 100)
        monet %= 100
    }
    if (monet >= 50){
        fiftySt = Math.floor(monet / 50)
        monet %= 50
    }
    if (monet >= 20){
        twentySt = Math.floor(monet / 20)
        monet %= 20
    }
    if (monet >= 10){
        tenSt = Math.floor(monet / 10)
        monet %= 10
    }
    if (monet >= 5){
        fiveSt = Math.floor(monet / 5)
        monet %= 5
    }
    if (monet >= 2){
        twoSt = Math.floor(monet / 2)
        monet %= 2
    }
    if (monet >= 1){
        oneSt = Math.floor(monet / 1)
        monet %= 1
    }

    let total = twoLv + oneLv + fiftySt + twentySt + tenSt + fiveSt + twoSt + oneSt;
    console.log(total)
}

coins(["1.23"])
