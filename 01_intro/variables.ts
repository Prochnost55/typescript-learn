let greetings: string = "Hello procho";

console.log(greetings);


// number
let userId: number = 342523;
// typescript is smart enough to detect the type of a variable. So, it is not necessary to decalre the type in the example above
// we can just do let userId = 43443412;


// boolean
let isLoggedIn: boolean = false;



// any

// in this scenario, the hero variable is not sure what value will be comming to it and thus the type of hero variable becomes any.
// we should avoid any as it is not a good practice.
// any turnoff the type check of the variable
// let hero;
let hero : string;
function getHero(){
    // another programmer can return any thing and things will break;
    return "Shaktiman";
}
hero = getHero();

export {}
