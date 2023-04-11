// // Type Aliases

// // It is a posibility that the user object is expected as and argument in more that 1 funtion.
// // example createUser, updateUser, etc; In this scenario we will have to declare the object and types again and again. this is not very ideal scenario
// // we can use something call Type aliases

// type User = {
//     name: string;
//     isPaid: boolean;
// }

// function updateUser(user: User): User {
//     return {name: "abhishek", isPaid: false}
// }
// updateUser(user); // user from ln 27;


// we can make use of ? and readonly keywords too
// ? keyword makes an property optional and readonly makes the property unmutable

type User = {
    readonly id: number
    name: string
    isPaid: boolean
    email?: string
}

let user2: User = {
    id: 12412,
    name: "abhi",
    isPaid: true
    // see no email is added then also no error
}

user2.name = "procho";
// user2.id = 47891; // this will not work


// many a time we work with and objects which is made up of several objects 
type cardHolderName = {
    holderName: string
}
type cardNumber = {
    cardnumber: string
}

// we can make use of & operator as shown below
// Note that cvv is not an good example (best practice) to achieve this;
type Card = cardHolderName & cardNumber & {
    cvv: string
}

let card: Card = {
    holderName: "abhishke",
    cardnumber: "123123",
    cvv : "123"
}
