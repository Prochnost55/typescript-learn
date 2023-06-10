interface User {
    name: string,
    emailId?: string,
    readonly userId: number,
    startTrial: () => string, // 1st way of declaring string
    applyCoupon(couponCode: string): number // 2nd way
}

// In typescript interface is loose form of class.
// Interface in general describes the expected behaviors(methods). 
// lets say if a interface has hello method and a class implements that interface then the class should have hello method in it.
// In JAVA we can only define behaviours(methods) in interface. But in TS we can define the properties also.

const abhishek: User = {
    name: "abhishek", 
    userId: 12341,
    startTrial: () => {
        return "start";
    },
    applyCoupon: (coupon) => { // notice coupon and couponCode in declaration are not same. You can change the name.
        return 10;
    }
};
// abhi.userId = 12314; // not allowed

// one of the advantages of interfaces over types is reopening of interfaces
// sometime certain interfaces don't have some functionalities and you want to add new properties or methods into it. You can easily do that

interface User {
    newProperty ?: string,
    newMethod ?: () => string // I am deliberately making these optional because I just don't want to update 'abhishek' const;
    // newMethod2() ?: string // form some reason this is not allowed. TODO: find why?
}

// another advantage of interfaces is inheritance
interface Admin extends User {
    role: "Admin" | "SuperAdmin"
}

const harshit: Admin = {
    name: "harshit", 
    userId: 1234,
    startTrial: () => {
        return "start";
    },
    applyCoupon: (coupon) => { // notice coupon and couponCode in declaration are not same. You can change the name.
        return 10;
    },
    role: "SuperAdmin"
};

// Read https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
