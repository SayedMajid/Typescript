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
var dict: { [key: string]: number } = { "0": 571 };

//% Enumerations mapped to numbers, basically are constant objects, removed during the compilation phase.

enum Directions {
    UP = 1,
    RIGHT = 2,
    DOWN = 3,
    LEFT = 4
};

var enums = [
    Directions.UP,
    Directions.RIGHT,
    Directions.DOWN,
    Directions.LEFT
];

console.log(enums);

//% Functions: Specify the types for the parameters and return value

var func = (data: number) => {
    return data;  //# return the calc value, data-type may varry
}

//% type - any : Permits any type, never ever use this, avoid at all costs because the types are never checked :) What does that mean :D ?? CHAOS!!!

var useless: any = "" || 4 || function (): void { } || [] || {};

//~! ^ Wont get type checked, value unknown which will lead to issues and bugs

//% Void : void => represents nothing. Can be used as a functions return value

var myFunc = (a: string, b?: boolean) => null || undefined
//# null and undefined are part of void types

//% Never: do anything
var foo: never;

//? | return type of function that never returns anything ??
function error(message: string) {
    throw new Error(message)
}


//% null: implicitly part of every type, unless the strict mode or null checks are enabled ?? which in this case is enabled in tsconfig.js

var _null: null = null;

//% Casting: allows you to convert one type to the another => docs
//% Classes : refer documentations.
