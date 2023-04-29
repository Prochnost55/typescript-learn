// abstract classes are blueprint for classes. They are similar to interfaces but have few key differences
abstract class TakePhoto {
    // first difference is in the syntax
    constructor(
        public cameraMode: string,
        public id: number
    ){}

    abstract getSepia(): void; // abstract method which needs to be declared in implemention class

    // major difference between an interface and abstract class is that an abstarct class can have definations for methods whereas interfaces can not.
    // these methods are accessible with objects
    getProcho(): string {
        return "procho";
    }
}

// interfaces gets implemented whereas abstract class are extended
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public id: number,
        public caption: string
    ){
        super(cameraMode, id);
    }

    getSepia(): void {
        
    }

    // if we want to override a default behaviour then we can easily do that 
    // getProcho(): string {
    //     return "procho";
    // }

}

// const takePhot = new TakePhoto("asdf", 123); 
// not allowed. 
// an object cannot be created using abstract class


const takePhoto = new Instagram("asdf", 123, "caption"); 
takePhoto.getProcho()

