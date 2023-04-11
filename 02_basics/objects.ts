// objects are extensively used in js projects. There is one weird behaviour in TS associated with objects however that can be convered with help of interfaces and related stuff.

// first let see how we can pass an object into a funtion and return an object from the function

function createUser ({name: string, isPaid: boolean}){
    // in this function we are expecting and object which will be having name and isPaid 
}
// if I want to return and object from a funtion then i can simply add
function createCourse ({name: string, price: number}):{}{
    return {}; // here we have just declared {} in the function declaration as return type
}
// if we want to specify what all fields are expected to be returned we can declare that too.
// function createCourse ({name: string, price: number}):{name: string, price: number, id: number}{
//     return {
//          id: 124,
//          name: 'react',
//          price: 500
//      }; 
// here we have declared what will be returned from the object too 
// }


// coming to weird behaviour
createUser({name: "abhishek", isPaid: false}); // this is allowed
// createUser({name: "abhishek", isPaid: false, email: "some@email.com"}); // this is not allowed
// but
let user = {name: "abhishek", isPaid: false, email: "some@email.com"}
createUser(user); // this is allowed

// this is the weird behaviour
// you can pass user as and object having few extra properties which are not declared intially. But if you pass it as part of method call then you are not allowed to do so.


