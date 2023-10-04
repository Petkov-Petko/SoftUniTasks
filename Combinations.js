function actorPoints([n]){
  n = Number(n);
  let points = 0;
  for (let x1 = 0; x1 <= n; x1++) {
    for (let x2 = 0; x2 <= n; x2++) {
      for (let x3 = 0; x3 <= n; x3++){
        let total = x1 + x2 + x3;
        if (total === n){
          points ++;
        }
      }
    }
  }
  console.log(points)
}

actorPoints(["20"]);
