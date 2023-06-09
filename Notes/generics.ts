// lets suppose we want to create a function which takes in a certain type of value and return the same type of value
// example the funcition takes in a string and returns a string and when it gets a number it returns a number
// funcitons like these are usefull when building components. This can make the code reusable.  


// function one can take any value which is boolean or a string and return either a boolean or a string.
// to achieve strict geneic we will have to place if checks inside the function
function one(val: boolean | string): boolean|string{
    return val;
}

// It is not a recommended way. the function can take in any value and return any value
function two(val: any): any{
    return val;
} 

// This is the correct way. We declare a generic "type". The incoming value can be anything but as soon as it comes we lock the type and return that type only.
function three<Type>(val: Type): Type{
    return val;
}

three(3);

// this is a clasical generic funtion
function genericFunction <Type,> (arg: Type[]): Type {
    let idx = 2;
    return arg[idx];
}

// this is a classical arrow function
const genericArrowFunction = <T,>(arg: T[]): T => {
    // note that , is placed after T. This is perfectly fine and is used to just infrom the fellow developers that it is not JSX
    let idx = 2;
    return arg[idx];
}


// class generics
interface Pen {
    name: string
    cost: number
}

interface Copy {
    type: string
    cost: number
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product);
    }
}
