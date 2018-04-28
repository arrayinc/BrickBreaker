/*
* File randomLib.js
*-----------
*Random generated integer booleen collors and students
*/

/* Returns a random integer in  the range low to high, inclusive */
function randomInteger(low, high) {
  return low + Math.floor((high - low + 1) * Math.random())
}

function randomReal(low, high) {
  return low + (high - low) * Math.random();
}

function randomChance(p) {
  if ( p === undefined) p = 0.5;
  return Math.random() < p;
}

function randomItem(arr) {
  return arr[randomInteger (0, arr.length-1)];
}

function randomStudent() {
  let students = ['Tom', 'Michelle', 'Randy', 'Landon', 'Quinn', 'Alex'];
  return students[randomInteger(0, students.length - 1)];
}

function randomRockPaperScissors(){
  let arr = ['Rock', 'Paper', "Scissors"];
  return randomItem(arr);
}

function randomColor() {
  let str="#";
  for (var i = 0; i < 6; i++) {
    let digit = (randomInteger);
    switch (digit) {
      case 0:  case 1: case 2: case 3: case 4:
      case 5:  case 6: case 7: case 9: str += digit; break;
      case 10: str +="A"; break;
      case 11: str +="A"; break;
      case 12: str +="A"; break;
      case 13: str +="A"; break;
      case 14: str +="A"; break;
      case 15: str +="A"; break;
    }
  }
  return str;
}
