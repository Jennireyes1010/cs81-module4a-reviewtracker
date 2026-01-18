// URL: https://github.com/Jennireyes1010/cs81-module4a-reviewtracker.git

// Weekly reading log
// reading log is an array of objects, each representing a day's reading activity
// Each object contains: day (string), book (string), minutes (number) 
// Its purpose is to manage and add reading entries, it declares the structure for the program and
// uses const because the reading log itself does not change reference, only its contents do.

const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];


// Adds a new reading entry to the log
// function addReadBook(day, book, minutes) takes three parameters: day (string), book (string), and minutes (number).
// It does not have an output, it takes these parameters and creates a new reading entry object, which is then pushed 
// into the readingLog array.
// It important for updating the reading log with new entries in a clear and structured way for loops and functions to process later.
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
// function totalReadingMinutes(log) takes one parameter: log, which represents an array of reading entries.
// let total = 0; is the variable that accumulates the total reading minutes.
// Third line creates a loop that iterates over each entry in the log array.
// Inside the loop, total += entry.minutes; adds the minutes from each entry to the total variable.
// This functions purpose is to calculate and return the total number of minutes spent reading.
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
// function mostReadBook(log) takes one parameter: log, which is an array of reading entries.
// Stars a loop that goes through each entry in the log to count how many times each book has been read.
// It checks if the book is already in the bookCounts object; if not, it logs it as 1, if it is, it increments the count.
// It then loops through the bookCounts object to find the book with the highest count and returns that book.
// This functions purpopse is to identify which book has been read the most frequently in the log.
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
// function printDailySummary(log) takes one parameter: log, which is an array of reading entries.
//for (let entry of log) starts a loop that goes through each entry.
// Inside the loop, console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`); outputs a formatted
// string to the console summarizing the reading activity for that day.
// This function's purpose is to provide a clear daily summary of reading activities.
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

//Improvment suggestion:
// I suggest we could implement a function that checks if the persons daily reading time is increasing or decreasing over time.
// A way to accomplish this is to create a function that compares each day's reading minutes to the previous day to determine the trend.
// This would provide insights on if the reader is being consitent for time spent reading.

function isReadingTimeIncreasing(log) {
  for (let i = 1; i < log.length; i++) {
    if (log[i].minutes < log[i - 1].minutes) {
      return false; 
    }
  }
  return true; 
}
// Example usage of the new function 

console.log("Is reading time increasing?", isReadingTimeIncreasing(readingLog));
