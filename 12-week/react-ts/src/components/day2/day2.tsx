import React from 'react'

// Func with Parameter + return type
function add(a: number, b: number): number {
    return a + b;
}
// a and b type is number and :number after function is return type


// Optional & Default Parameters
function greet(name: string, age?: number): string {
    return age ? `Hello ${name}, age ${age}` : `Hello ${name}`
}
// age?: number → optional param.
// b: number = 2 → default param.

// Function Expressions
const subtract = (x: number, y: number): number => x - y;


// Return Type void and never
function logMessage(msg: string): void {
    console.log('msg:', msg); // no return bcz it's return type is void
}

function throwError(message: string): never {
    throw new Error(message) // never returns bcz it's return type is void
}


// void: Used when a function doesn't return a value, but the function completes its execution normally.
// never: Used when a function never completes its execution (it throws an error or goes into an infinite loop).

export default function Day2() {
    return (
        <div>
            add :{add(7, 3)}
            <br />
            geet : {greet("BP")}
            <br />
            subtract : {subtract(4, 6)}
            <br />
            return Type Void : {logMessage('logged')}
            {/* return Type Never : {throwError('Error Send')} */}
        </div>
    )
}
