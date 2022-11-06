const Employee=require("./lib/Employee")
const Manager=require("./lib/Manager")
const Engineer=require("./lib/Engineer")
const Intern=require("./lib/Intern")
const inquirer=require("inquirer")
const fs = require('fs')
const generateHTML=require("./src/generateHTML")
const newEmployees=[]


function addEmployee(){
    inquirer
    .prompt([
        {
          type: 'list',
          name: 'role',
          message: 'What is the employee role?', 
          choices: ["Manager", "Engineer", "Intern"]
        },
      ]).then((data)=>{
        switch(data.role){
            case "Manager": 
                addManager()
                break
            case "Engineer": 
                addEngineer()
                break
            case "Intern":
                addIntern()
        }
      })
}

function addManager(){
    inquirer
    .prompt([
        {
           type: "input" ,
           name: "name",
           message: "What is the employee name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee email?"
        },
        {
            type: "input",
            name: "office",
            massage: "What is the employee office number?"
        },
    ] ).then((data) => {
        const manager= new Manager(data.name, data.id, data.email, data.office)
        newEmployees.push(manager)
        console.log("manager has been created ")

        createNew()
    })

}

function addEngineer(){
    inquirer
    .prompt([
        {
           type: "input" ,
           name: "name",
           message: "What is the employee name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee email?"
        },
        {
            type: "input",
            name: "github",
            massage: "What is the employee github?"
        },
    ] ).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        newEmployees.push(engineer)
        createNew()
    })
}

function addIntern(){
    inquirer
    .prompt([
        {
           type: "input" ,
           name: "name",
           message: "What is the employee name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee email?"
        },
        {
            type: "input",
            name: "school",
            massage: "What is the employee school?"
        },
    ] ).then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        newEmployees.push(intern)
        console.log("Intern has been created ")
        createNew()
    })
}

function createNew(){
inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'choice',
      message: 'Do you want to create a new employee?',
    },
    
  ]) .then((data) => {
    if (data.choice === true) {
        addEmployee()

    } else{
        console.log("Goodbye")
        const generatedHTML = generateHTML(newEmployees)
        fs.writeFile("./dist/Team-Profile.html", generatedHTML, (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
            }
          });
    }
})};

//calls function
createNew()


//start "would you like to add a new employee" true/false

 //what is the employee role? Drop down: Manager, Engineer, Intern
        //Manager:
        //if yes "what is the employee name?"
        //"what is the employee id?"
        //what is the employee email?
        //"what is the office number"
        //"would you like to add another employee?"
        
        //Engineer:
        //if yes "what is the employee name?"
        //"what is the employee id?"
        //what is the employee email?
        //"what is employee github?"
        //"would you like to add another employee?"

         //Intern:
        //if yes "what is the employee name?"
        //"what is the employee id?"
        //what is the employee email?
        //intern "what is the employee school?"
        //"would you like to add another employee?"    

//if no, "Goodbye"

