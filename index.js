#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta("('-.     _ .-') _        (`-.      ('-.       .-') _  .-') _               _  .-')     ('-.                       ('-.     _   .-')       ('-.   "));
console.log(chalk.magenta("( OO ).-.( (  OO) )     _(OO  )_  _(  OO)     ( OO ) )(  OO) )             ( \( -O )  _(  OO)                     ( OO ).-.( '.( OO )_   _(  OO)  "));
console.log(chalk.magenta("/ . --. / \     .'_ ,--(_/   ,. \(,------.,--./ ,--,' /     '._ ,--. ,--.   ,------. (,------.        ,----.      / . --. / ,--.   ,--.)(,------.  "));
console.log(chalk.magenta("| \-.  \  ,`'--..._)\   \   /(__/ |  .---'|   \ |  |\ |'--...__)|  | |  |   |   /`. ' |  .---'       '  .-./-')   | \-.  \  |   `.'   |  |  .---' "));
console.log(chalk.magenta(".-'-'  |  | |  |  \  ' \   \ /   /  |  |    |    \|  | )'--.  .--'|  | | .-') |  /  | | |  |           |  |_( O- ).-'-'  |  | |         |  |  |      "));
console.log(chalk.magenta("\| |_.'  | |  |   ' |  \   '   /, (|  '--. |  .     |/    |  |   |  |_|( OO )|  |_.' |(|  '--.        |  | .--, \ \| |_.'  | |  |'.'|  | (|  '--.   "));
console.log(chalk.magenta("|  .-.  | |  |   / :   \     /__) |  .--' |  |\    |     |  |   |  | | `-' /|  .  '.' |  .--'       (|  | '. (_/  |  .-.  | |  |   |  |  |  .--'  "));
console.log(chalk.magenta("|  | |  | |  '--'  /    \   /     |  `---.|  | \   |     |  |  ('  '-'(_.-' |  |\  \  |  `---.       |  '--'  |   |  | |  | |  |   |  |  |  `---. "));
console.log(chalk.magenta("`--' `--' `-------'      `-'      `------'`--'  `--'     `--'    `-----'    `--' '--' `------'        `------'    `--' `--' `--'   `--'  `------'  "));
// classes player 
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
let player_1 = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name"
    }
]);
// class enemy
class enemy {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let enemy_1 = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Enemy",
        choices: ['skeleton☠️', 'zombie👺', 'alien👽']
    }
]);
// gather data
let p1 = new player(player_1.name);
let e1 = new enemy(enemy_1.select);
do { // SKELETON
    if (enemy_1.select == 'skeleton☠️') {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select Your Option",
            choices: ['Attack🗡️', 'Drink Potion🍺', '🚶🏻Run For Your Life..']
        });
        if (ask.option === 'Attack🗡️') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is: ${p1.fuel}`));
                console.log(chalk.bold.green(`${e1.name} fuel is: ${e1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.bgRed(' 👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻 YOU LOSE! BETTER LUCK NEXT TIME  👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  😢😢😔😔😢😢😔😔  '));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecrease();
                console.log(chalk.bold.red(`${e1.name} fuel is: ${e1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is: ${p1.fuel}`));
                if (e1.fuel <= 0) {
                    console.log(chalk.bold.bgMagenta('  😍😍🎊🎊🥳🥳😍😍🎊🎊  YOU WIN!!! 😍😍🎊🎊🥳🥳😍😍 🎊🎊  '));
                    process.exit();
                }
            }
        }
        if (ask.option === 'Drink Potion🍺') {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`🍺🍺🍺You Drink Health Portion  and  Your fuel is ${p1.fuel}🪫🪫🪫`));
        }
        if (ask.option === '🚶🏻Run For Your Life..') {
            console.log(chalk.bold.bgYellow(' 👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  YOU LOSE! BETTER LUCK NEXT TIME  👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  😢😢😔😔😢😢😔😔  '));
            process.exit();
        }
    }
    // ZOMBIE
    if (enemy_1.select == 'zombie👺') {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select Your Option",
            choices: ['Attack🗡️', 'Drink Potion🍺', '🚶🏻Run For Your Life..']
        });
        if (ask.option === 'Attack🗡️') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is: ${p1.fuel}`));
                console.log(chalk.bold.green(`${e1.name} fuel is: ${e1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.bgRed(' 👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  YOU LOSE! BETTER LUCK NEXT TIME  👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  😢😢😔😔😢😢😔😔  '));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecrease();
                console.log(chalk.bold.red(`${e1.name} fuel is: ${e1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is: ${p1.fuel}`));
                if (e1.fuel <= 0) {
                    console.log(chalk.bold.bgMagenta(' 😍😍🎊🎊🥳🥳😍😍🎊🎊   YOU WIN!!! 😍😍🎊🎊🥳🥳😍😍🎊🎊  '));
                    process.exit();
                }
            }
        }
        if (ask.option === 'Drink Potion🍺') {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`🍺🍺🍺You Drink Health Portion  and  Your fuel is ${p1.fuel} `));
        }
        if (ask.option === '🚶🏻Run For Your Life..') {
            console.log(chalk.bold.bgYellow(' 👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  YOU LOSE! BETTER LUCK NEXT TIME  👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  😢😢😔😔😢😢😔😔  '));
            process.exit();
        }
    }
    //ALIEN
    if (enemy_1.select == 'alien👽') {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select Your Option",
            choices: ['Attack🗡️', 'Drink Potion🍺', '🚶🏻Run For Your Life..']
        });
        if (ask.option === 'Attack🗡️') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is: ${p1.fuel}`));
                console.log(chalk.bold.green(`${e1.name} fuel is: ${e1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.bgRed('👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻 YOU LOSE! BETTER LUCK NEXT TIME  👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  😢😢😔😔😢😢😔😔 '));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecrease();
                console.log(chalk.bold.red(`${e1.name} fuel is: ${e1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is: ${p1.fuel}`));
                if (e1.fuel <= 0) {
                    console.log(chalk.bold.bgMagenta(' 😍😍🎊🎊🥳🥳😍😍🎊🎊   YOU WIN!!! 😍😍🎊🎊🥳🥳😍😍🎊🎊  '));
                    process.exit();
                }
            }
        }
        if (ask.option === 'Drink Potion🍺') {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`🍺🍺🍺 You Drink Health Portion  and  Your fuel is ${p1.fuel} `));
        }
        if (ask.option === '🚶🏻Run For Your Life..') {
            console.log(chalk.bold.bgYellow('👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  YOU LOSE! BETTER LUCK NEXT TIME  👎🏻👎🏻👎🏻👎🏻👎🏻👎🏻  😢😢😔😔😢😢😔😔'));
            process.exit();
        }
    }
} while (true);
// class player{
//      name: string
//      fuel:number =100
//      constructor(name:string){
//         this.name = name
//    }
//    decreaseHealth(){
//     this.fuel -= 20
//    }
//    increaseHealth(){
//     this.fuel = 100
//    }
//  }
// // player 2 enemy
//  class enemy{
//     name: string
//     fuel:number =100
//     constructor(name:string){
//        this.name = name
//   }
//   decreaseHealth(){
//    this.fuel -= 20
//   }
//   increaseHealth(){
//    this.fuel = 100
//   }
// }
// // step 2 player  object
// async function main() {
//     const { playerName } = await inquirer.prompt([
//         {
//             name: "playerName",
//             type: "input",
//             message: chalk.green.bold("Enter Your Player Name:")
//         }
//     ]);
// // enemy object
// const { enemyType } = await inquirer.prompt([
//     {
//         name: "enemyType",
//         type: "list",
//         Choices: ['alien','zombie','witch','skeleton'],
//         message : chalk.red.bold("Select Your Enemy You Fight With:")
//      }
// ])
// // step 3 battle field 
// const p1 = new player(player.name);
// const e1 = new enemy(enemyType.name);
// console.log(`${p1} v/s ${e1}`);
// // step 4
// }()
