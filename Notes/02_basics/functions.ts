// declaring function in typescript
// firstName is of type string, secondName is of type String
// getLength returns a number 
function getLength(firstName: string, secondName: string): number {
    // return firstName+secondName;
    return (firstName+secondName).length;
}

// same thing in arrow function
const getLen = (fname: string, sname: string): number => {
    return (fname+sname).length;
}

// lets say you have an optional parameter
// then you will have to declare a default value for the same
// example isPaid is optional in the function below
function login(name: string, email: string, isPaid: boolean = false): string {
    return name;
}


// the context switching in TS is really strong
const arr1 = ["str1", "str2"]; // TS automatically detects the type of arr1 as string[]
const arr2 = [1, 2, 3]; // same goes for this too.

// now if we use a map, we don't need to declare type of val.
// we can just declare the return type of the callback.
arr1.map((val): string => {
    return "some val";
})

// if your function doesn't return anything then the return type would be void.
function print(value: string): void{
    console.log(value);
}

// So in case of error handler should it be void?
// actually no
// the return type is never. never type is provided in typescript
// when we want to forcefully stop the execution of a function in such case never is returned.
// the funtion 'never' returns a value.
function handleError(errMsg: string): never {
    throw new Error(errMsg);
}
