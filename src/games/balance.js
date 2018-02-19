// import { cons } from 'hexlet-pairs';
// import { runGame } from '..';

// const startGame = () => {
//   const game = {
//     task: 'Balance the given number.',
//     function: () => {
//       let A = [];
//       for (let i = 0; i < 3; i += 1) {
//         A[i] = Math.round(Math.random() * 9);
//       }
//       const question = (`${A.join('')}`);
//       A = A.sort();
//       while ((A[2] - A[0]) > 1) {
//         A[0] += 1;
//         A[2] -= 1;
//         A = A.sort();
//       }
//       const correctAnswer = (`${A.join('')}`);
//       return cons(question, correctAnswer);
//     },
//   };

//   const message = 'Welcome to the Brain Games: BALANCE';

//   runGame(game, message);
// };
// export default startGame;
