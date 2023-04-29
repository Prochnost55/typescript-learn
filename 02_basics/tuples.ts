// tuple

// a tuple is an array having strict restriction about the position of the data
// example if we declare a tuple can have number, string then the first element will be a number and second element will be a string

const normalArray: (number|string)[] = [1, '2', '4', 3];
// here we can see that the array can have only number or string but the order is not restricted

const tupleArray: [number, string] = [1, '2'];
// here values can be present in array in this specific order only. Please note that the length of tuple cannot be more

// there are a couple of issue in TS
// the tuple allows method like push, unshift, etc
tupleArray.push('12') // therefore this is allowed

// also you can update the value of a tuple
tupleArray[0] = 1234;
