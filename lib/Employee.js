// TODO: Write code to define and export the Employee class


class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }

    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }

    getRole(){
        return this.role
    }
}

// //THIS STARTS EXAMPLE USING OBJECT CONSTRUCTORS
// function Employee (name, id, email){
//     this.name = name;
//     this.id = id;
//     this.email = email;

//     // function getName(){
//     //     return this.name
//     // }

// }; 

// //NO arrow function for constructors
// Employee.prototype.getName=function(){
//     return this.name
// }
// //THIS ENDS EXAMPLE USING OBJECT CONSTRUCTORS


module.exports = Employee