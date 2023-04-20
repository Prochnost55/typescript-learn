// // interface acts as a blue print for classes
// interface TakePhoto {
//     cameraMode: string,
//     filter: string,
//     id: number
// }

// interface Story {
//     createStory(): void
// }

// // if a class wants to implement an interface it has to provide all the mentioned properties or methods in that class
// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public id: number
//     ){}
// }

// // A class can implement multiple interfaces - it has to just follow the rules
// class YouTube implements TakePhoto, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public id: number,
//         public shorts: string
//     ){}

//     createStory(): void {
//         console.log("created story")
//     }
// }
