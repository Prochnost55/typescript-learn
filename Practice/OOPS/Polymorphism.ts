class User {
    name: string
    age: number
}

class Student extends User {
    collegeName: string
}

class Instructor extends User {
    companyName: string
}

// the parent reference can store child object
let u:User = new Student(); // allowed
// we can use this to create some general function which can be applicable to all the users
// example changePassword(user: User, newPas sword: string);

// the child reference cannot store parent object
// let s:Student = new User(); // not allowed

console.log(u);
// console.log(u.collegeName); this is not allowed as college name is availabe in student object, not in user Object
// console.log(s);


// Types of Polymorphism
// 1. Method Overloading -> compile time polymorphism
// 2. Method Overriding -> Run time polymorphism

// Method overloading
// when the no. of parameters or the type of parameters are different we say its method overloading
// we can't overload funcitons having same function signature
class Printer {
    print(): void;
    print(name: string): void;
    print(name?: string): void {
        if (name) {
            console.log(`hello ${name}`);
        } else {
            console.log("hello");
        }
    }
}


// Method Overriding
// if parent and  child class have methods with same signatures and return type then it is method overriding.
class NewPrinter extends Printer {
    print(): void;
    print(): void {
        console.log("hello new print");
    }
}
// the method that gets executed is dependent on the type of the object and not on the type of reference/variable therefore it is called run time polymorphism


let temp: Printer = new Printer()
temp.print();

let temp2: NewPrinter = new NewPrinter()
temp2.print();


export {}

