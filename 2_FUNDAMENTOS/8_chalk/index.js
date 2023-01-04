const chalk = require("chalk")

const nota = 4
// console.log(chalk.bold('Parabéns! Você está aprovado'))

 if(nota >=7) {
   console.log(chalk.green('Parabéns! Você está aprovado'))
 } else {
   console.log(chalk.bgRed.bold.white('Você está Reprovado'))
 }