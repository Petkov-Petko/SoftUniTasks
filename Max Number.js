function maxNumbers(input){
    let maxRight = input[input.length - 1];
    const topIntegers = [maxRight]

    for (let i = input.length - 2; i >= 0; i--){
        if (input[i] > maxRight){
            maxRight = input[i]
            topIntegers.push(input[i])
        }
    }
    console.log(topIntegers.reverse().join(" "))
}

maxNumbers([41, 41, 34, 20])