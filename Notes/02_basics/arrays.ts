// if we don't give a type to array then we get error prompt when adding any value to the array.
// const superHeros = []; // incorrect way
// const superHeros: [] = []; // incorrect way

const superHeros: string[] = []; // correct way
superHeros.push('thor');


// one more way to define type in array
const power: Array<number> = [];
// const power: number[] = [];
power.push(2);

// custom object array
type User = {
    name: string
    isActive: boolean
}
const allUsers: User[] = [];
allUsers.push({name:"abhishek", isActive: true});

// 2d array
const twoDimArray: number[][] = []
