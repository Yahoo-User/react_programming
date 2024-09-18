console.clear()
console.group("./exports.js")

// Declare modules to export.
export default function func1() {}
export function func2() {}
export const variable1 = 123
export let variable2 = "Hello"


// > node exports.js
//   OR
// > ts-node exports.js
//
// (node:16456) Warning: To load an ES module,          <--- ***
//  (1) set "type": "module" in the "package.json" or 
//  (2) use the .mjs extension.                         <--- ***


console.groupEnd()

