//* Type Declarations:
var num: number = 5;
var str: string = "Typescript"


//# Basic Types:
var num: number = 7;                       //? Number
var str: string = "Typescript";            //? String
var flag: boolean = true || false;         //? Boolean
var array: Array<number> = new Array;      //? Array => Array<number> || number[]
var strArray: Array<string> = new Array;   //? Array => Array<string> || string[]

//% Tuples have fixed number of elements with specific types:
var tuples: [boolean, string] = [true, "Typescript"];

var obj: { name: string, age: number } = { name: "Brendan Eich", age: 61 };

//% Dictionary of numbers indexed by a string
var dict: { [key: string]: number } = { "0": 571 }