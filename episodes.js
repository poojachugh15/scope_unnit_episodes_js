//  Episode 1


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// predicted output: the murderer is Miss Scarlet because there is only on murderer in the objects.

// Episode 2


// const murderer = 'Professor Plum';

// const changeMurderer = function() {
// //   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}`;
// }
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// predicted output: murderer is the Professor Plum because the value of a constant can't be changed through reassignment, and it can't be redeclared.


//  Episode 3


// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}`;
// console.log('Second Verdict: ', secondVerdict);

// Perdicted output: two murderes will be there because it used console.log() method twice 
// first murderer will be Mrs. Peacock, because this method declared first and then second murderer will be Professor Plum.

//  Episode 4


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}`);

// predicted output: there is no murderer but it has three suspects and suspect three is replace with new name. 
//  Because The let statement declares a block-scoped local variable, optionally initializing it to a value.


//  Episode 5


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// predicted output: there is only one murderer: Miss Scarlet and it will return new weapon because it is defined with const.

//  Episode 6


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// predicted output: The murderer should be Mrs. White because they called the method changeMurder in the last with const.

//  Episode 7


// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// predicted output : the murderer is Mrs. Green because they called the function changeMurderer() in the last.


//  Episode 8


// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// predicted output: the murderer will be Mrs. Peacock and there should be a candle stick weapon.

//  Episode 9


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}`;
}

const verdict = declareMurderer();
console.log(verdict);

// predicted output: the murderer will be Professor Plum because it returned {murderer}.
