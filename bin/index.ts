#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

import chalkAnimation from "chalk-animation"




class Person{

    private personality:string = ""

    public constructor(){

            this.personality = "Mystery"
    }

    public askQuestion(answer:number){

        if(answer == 1){
            this.personality = "Extrovert"
        }
        else if(answer == 2){
            this.personality = "Inrovert"
        }
        else{
            this.personality = "Mystery"
        }

    }

    public getPersonality():string{
        return this.personality
    }

}

class Student  extends Person{
    
    private name:string = ""

    public constructor (){
        super()
        this.name = ""

    }

    public getName():string{
        return this.name 
    }

    public setName(_name:string){
        this.name = _name
    }

  
}


async function start(){


    await inquirer.prompt([{
        type:"number",
        name:"option",
        message:"Type 1 if you talk to Others or Type 2 to if you would rather keep to Yourself :"

    }]).then((answers)=>{

        let person1 = new Person()
     

        if(answers.option == 1){
            person1.askQuestion(answers.option)
        }
        else if(answers.option == 2){
            person1.askQuestion(answers.option)
        }
        else{
            person1.askQuestion(answers.option)
        }
       
        console.log(`You are an ${person1.getPersonality()}`)


    })

    second()
    
}


async function second(){

    await inquirer.prompt([{
        type:"input",
        name : "name",
        message:"What is your Name : "
    }]).then((answers)=>{
        let MyStudent = new Student()

        MyStudent.setName(answers.name)

        console.log(`Your Name is : ${MyStudent.getName()} and Your Personality Type is : ${MyStudent.getPersonality()}`)
    })
}


start()

