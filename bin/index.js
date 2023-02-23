#! /usr/bin/env node
import inquirer from "inquirer";
class Person {
    personality = "";
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extrovert";
        }
        else if (answer == 2) {
            this.personality = "Inrovert";
        }
        else {
            this.personality = "Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    name = "";
    constructor() {
        super();
        this.name = "";
    }
    getName() {
        return this.name;
    }
    setName(_name) {
        this.name = _name;
    }
}
async function start() {
    await inquirer.prompt([{
            type: "number",
            name: "option",
            message: "Type 1 if you talk to Others or Type 2 to if you would rather keep to Yourself :"
        }]).then((answers) => {
        let person1 = new Person();
        if (answers.option == 1) {
            person1.askQuestion(answers.option);
        }
        else if (answers.option == 2) {
            person1.askQuestion(answers.option);
        }
        else {
            person1.askQuestion(answers.option);
        }
        console.log(`You are an ${person1.getPersonality()}`);
    });
    second();
}
async function second() {
    await inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your Name : "
        }]).then((answers) => {
        let MyStudent = new Student();
        MyStudent.setName(answers.name);
        console.log(`Your Name is : ${MyStudent.getName()} and Your Personality Type is : ${MyStudent.getPersonality()}`);
    });
}
start();
