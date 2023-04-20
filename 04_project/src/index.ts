// // declaring classes
// class User {
//     readonly userId: string = "1234125"
//     private email: string // different. required to be declared. 
//     // in js we can use #email to make email private
//     name: string // different. required to be declared
//     city: string = "" // city is initialzed as empty string
//     constructor(name: string, email: string){ // different
//         this.name = name;
//         this.email = email
//     }
// }

// in production many people use this syntax to produce the same code
class User {
    // private property and method
    // private _courseCount = 1;
    private deleteToken(): string {
        return "";
    }

    // a protected property or method is accessible in the child classes whereas private property or methods are not. 
    protected _courseCount = 1;

    readonly userId: string = "1234125"
    constructor(
        public name: string, 
        private email: string,
        public city?: string
    ){}
    
    // getter
    get getAppleEmail(): string {
        return `apple-${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    // setter
    // point to note - a setter cannot have a return type in typescript
    // this is how it is implemented
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("course count should be more than one");
        }
        this._courseCount = courseNum;
    }

}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
        // this.deleteToken() // this is not allowed as deleteToken is a private property
    }
}

const procho = new User("Abhishek", "some@email.com");
procho.city = 'pilibhit'
// procho.userId = '124134' // not allowed
// procho.email // it is private and will not be accessible
