function library(input) {
  const book = input[0];
  let index = 1;
  let checkedBooks = 0;

  while (input[index] !== book) {
    if (input[index] === "No More Books") {
      console.log("The book you search is not here!");
      console.log(`You checked ${checkedBooks} books.`);
      return;
    }
    index++;
    checkedBooks++;
  }
  console.log(`You checked ${checkedBooks} books and found it.`);
}

library(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])




