// sometime we need to assign different datatypes to a same variable.
// groupId = '12345' 
// groupId = 12345
// this can be done using a union datatype;
let groupId: string | number = 12345;
groupId = "12345";

// same thing is applicable to objects
type Agent = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let user: Admin | Agent = {
    name: "abhishek",
    id: 123
}
user = {
    username: "abhishek username",
    id: 123
}

// in case of functions also we can allow passing a value which can have different types
function getDataById(id: number | string){
    // id.toUpperCase() // this will not work here but
    if(typeof id == "string"){
        id.toUpperCase() // here it will work
    }

    // typescript intelligently identifies that we have added a type check and thus the value can only be a string
}



// array
const data: number[] = []; // we have set that data can only have numbers
// how to declare that data can contain number or string?
// const data2: number[] | string[] = [1,2,'3']; // this is incorrect because what this actually means is that the data2 can either be a number[] or a string[]

// the correct answer is 
const data2: (number | string)[] = [1,2,'3'];


// sometimes variables can only be assigned a set of values
// this we can achieve like shown below

let pi: 3.14 = 3.14;
let seatAllotment: 'aisle' | 'middle' | 'window' = 'aisle';
