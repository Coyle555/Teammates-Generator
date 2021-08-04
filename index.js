var inquirer = require('inquirer');
var fs = require('fs')
const Choice = require('inquirer/lib/objects/choice');
// TODO: Create an array of questions for user input
let employees = []
let startApp = () => {
    inquirer 
    .prompt ([
    {
        message: 'What is you title at the workplace?',
        type: 'list',
        name: 'id',
        choices: [
            'Employee',
            'Manager',
            'Intern',
            'Engineer'
        ]
        
    },
    ])
    
    .then(results => {
        if (results.id === 'Manager') {
            inquirer.prompt([
                {
                    message: 'What is your name?',
                    type: 'input',
                    name: 'name',
                    
                },
                {
                    message: 'What is your ID number?',
                    type: 'input',
                    name: 'num',
                    
                },
                {
                    message: 'What is your email?',
                    type: 'input',
                    name: 'email',
                    
                },
                {
                    message: 'What is your office number?',
                    type: 'input',
                    name: 'officeN',
                }
            ])
            .then(results => {
            const man = new Manager(results)
            employees.push(man)
                if (employees.length < 4) {
                return startApp();
                }
            })
        
        } else if (results.id === 'Engineer') {
            inquirer.prompt ([
                {
                    message: 'What is your name?',
                    type: 'input',
                    name: 'name',
                    
                },
                {
                    message: 'What is your ID number?',
                    type: 'input',
                    name: 'num',
                    
                },
                {
                    message: 'What is your email?',
                    type: 'input',
                    name: 'email',
                    
                },
                {
                    message: 'What is your GiitHub username?',
                    type: 'input',
                    name: 'git'

                }
            ])
            .then(results => {
                const eng = new Engineer(results)
                // fs.appendFile(`index.html`, eng.name, (err) => 
                // err ? console.error(err) : console.log('Added!'));
                employees.push(eng)
                if (employees.length < 4) {
                return startApp();
                }
            })
        } else if (results.id === 'Intern') {
            inquirer.prompt ([
                {
                    message: 'What is your name?',
                    type: 'input',
                    name: 'name',
                    
                },
                {
                    message: 'What is your ID number?',
                    type: 'input',
                    name: 'num',
                    
                },
                {
                    message: 'What is your email?',
                    type: 'input',
                    name: 'email',
                    
                },
                {
                    message: 'What school did you go to?',
                    style: 'input',
                    name: 'sch'
                }
            ])
             .then(results => {
                const int = new Intern(results)
                employees.push(int)
                if (employees.length < 4) {
                return startApp();
                }

            // console.log(int)
            })
            // fs.appendFile(`index.html`, int, (err) => 
            // err ? console.error(err) : console.log('Added!'));
        } else {
        const choice = new Employee(results)
        employees.push(choice)
                if (employees.length < 4) {
                return startApp();
                }
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error(error)
        } else {
            console.error(error)
        }
    });
    }

    function Employee(data) {
        this.name = data.name
        this.id = data.num
        this.email = data.email
        this.getRole = () => {
            console.log(`I am an Employee`)
        }
        this.getEmail = () => {
            console.log(`My email is ${data.email}`)
        }
        this.getName = () => {
            console.log(`My name is ${data.name}`)
        }
        this.getId = () => {
            console.log(`My ID is ${data.num}`)
        }
    }
    function Manager(data) {
        this.name = data.name
        this.id = data.num
        this.email = data.email
        this.officeNumber = data.officeN
        this.getRole = () => {
            console.log(`I am a Manager`)
        }
        this.getEmail = () => {
            console.log(`My email is ${data.email}`)
        }
        this.getName = () => {
            console.log(`My name is ${data.name}`)
        }
        this.getId = () => {
            console.log(`My ID is ${data.num}`)
        }
    }
    function Engineer(data) {
        this.name = data.name
        this.id = data.num
        this.email = data.email
        this.gitHub = data.git
        this.getGitHub = () => {
            console.log(`Github: ${data.git}`)
        }
        this.getRole = () => {
            console.log(`I am an Engineer`)
        }
        this.getEmail = () => {
            console.log(`My email is ${data.email}`)
        }
        this.getName = () => {
            console.log(`My name is ${data.name}`)
        }
        this.getId = () => {
            console.log(`My ID is ${data.num}`)
        }
    }
    function Intern(data) {
        this.name = data.name
        this.id = data.num
        this.email = data.email
        this.school = data.sch
        this.getSchool = () => {
            console.log(`Github: ${data.sch}`)
        }
        this.getRole = () => {
            console.log(`I am an Intern`)
        }
        this.getEmail = () => {
            console.log(`My email is ${data.email}`)
        }
        this.getName = () => {
            console.log(`My name is ${data.name}`)
        }
        this.getId = () => {
            console.log(`My ID is ${data.num}`)
        }
    }

    startApp()