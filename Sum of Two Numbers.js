function SumOfTwoNumbers([start, end, magicNumber]) {
  start = Number(start);
  end = Number(end);
  magicNumber = Number(magicNumber);
  let counter = 0;

    for (let a = start; a <= end; a++){
        for (let b = start; b <= end; b++){
            counter ++;
            if (a + b === magicNumber){
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`)
                return  
            }   
        }
    }
    console.log(`${counter} combinations - neither equals ${magicNumber}`)
}

SumOfTwoNumbers(["23",
"24",
"20"])




