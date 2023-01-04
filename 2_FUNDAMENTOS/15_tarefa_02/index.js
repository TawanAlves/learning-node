const chalk = require("chalk")
const inquirer = require("inquirer") 

inquirer.prompt([{
   name: 'nome',
   message: "Qual o seu nome?",
},{
   name: 'idade',
   message: "Diga sua idade?",
}])
.then((answers) => { 
   const resp = `Nome:${answers.nome} Idade:${answers.idade}`
   console.log(chalk.bgYellow.black (resp))
})
.catch(err => console.log(err))
