// let greeting: string = "Hello, TypeScript!";
// let userCount: number = 42;
// let isLoading: boolean = true;
// let scores: number[] = [100, 95, 98];

// -------------------------------------------

// using Unkown Method

// let w: unknown = 1;
// w = "string"; // no error
// w = {
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   }
// } as { runANonExistentMethod: () => void}

// if(typeof w === 'object' && w !== null) {
//   (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }

// -----------------------------------------

// let v: any = true;
// v = "string"; // no error as it can be "any" type
// Math.round(v)

// ----------------------------------------

// const names: string[] = [];
// names.push("Dylan");

// const names: readonly string[] = ["Dylan"];
// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

