function moving(input){
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let hight = Number(input[2]);
    let index = 3;
    let totalSpace = width * hight * lenght;
    let boxSpace = 0;
    let diff;

    while(input[index] !== "Done"){
        boxSpace += Number(input[index]);
        diff = Math.abs(totalSpace - boxSpace)
        if (boxSpace > totalSpace){
            console.log(`No more free space! You need ${diff} Cubic meters more.`)
            return
        }
        index ++;
    }
    console.log(`${diff} Cubic meters left.`)

}


moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

