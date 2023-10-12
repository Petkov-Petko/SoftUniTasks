function dungeon(input) {
  const inputString = input[0];
  const rooms = inputString.split("|");

  let health = 100;
  let coins = 0;
  let totalRooms = 0;

  for (let room of rooms) {
    const [type, value] = room.split(" ")
    totalRooms ++;
    if (type === "potion"){
        health += Number(value)

        if (health > 100){
            console.log(`You healed for ${100 - (health - value)} hp.`) 
            health = 100;
        }
        else{
            console.log(`You healed for ${value} hp.`)
        }
        console.log(`Current health: ${health} hp.`)
    }
    else if (type === "chest"){
        coins += Number(value)
        console.log(`You found ${value} coins.`)
    }
    else{
        health -= value;
        if (health > 0){
            console.log(`You slayed ${type}.`)
        }
        else{
            console.log(`You died! Killed by ${type}.`)
            console.log(`Best room: ${totalRooms}`)
            return
        }
    }
  }
  console.log("You've made it!")
  console.log(`Coins: ${coins}`)
  console.log(`Health: ${health}`)
}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])

