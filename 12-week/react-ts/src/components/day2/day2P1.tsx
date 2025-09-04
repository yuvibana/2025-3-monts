import React from 'react'
// . Union & Intersection Types
// Union → either/or.

function printId(id: number | string): void {
    console.log("ID:", id);
}

// Intersection → combine multiple types.
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;
const person: Person = { name: "Bhupendra", age: 25 };


// Type Aliases
// Type Aliases let you give a name to a type.
type userID = string | number;
function getUser(id: userID): string {
    return `UserID is : ${id}`
}

// You can also alias objects:
type Point = {
    x: number,
    y: number
};

const point: Point = { x: 10, y: 20 };

// Functions + Type Aliases
type MathOperations = (a: number, b: number) => number;
const add: MathOperations = (a, b) => a + b;
const mul: MathOperations = (a, b) => a * b;


export default function Day2P1() { // p=> point(.)
    return (
        <div>
            Union :{printId(7)} {"=> chk console"}
            <br />
            Intersection :name: {person.name}, Age: {person.age}
            <br />
            Type Aliases : {getUser('07')}
            <br />
            Alias objects : {"x=>"} {point.x}, {"y=>"} {point.y}
        </div>
    )
}
