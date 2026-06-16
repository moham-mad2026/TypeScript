"use strict";
// let greeting: string = "Hello, TypeScript!";
// let userCount: number = 42;
// let isLoading: boolean = true;
// let scores: number[] = [100, 95, 98];
let w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
