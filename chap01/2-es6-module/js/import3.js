console.clear()
console.group("./import3.js")
console.log()


// ***: "undefine" when referring to the "export default" module
//      if import * as I from "XXX.js".     <--- ***

// import * as I from "./exports.js"           // OK, except export default module.
import func1, * as I from "./exports.js"    // OK

// ---------------------------------

console.log("1. func1: %s", I.func1)        // undefined
console.log("1. func1: %s", func1)          // OK

console.log("2. func2: %s", I.func2)        // OK
console.log("3. variable1:", I.variable1)   // OK
console.log("4. variable2:", I.variable2)   // OK

// ---------------------------------

// module by export default can only be referred by the following:
// import func1 from "./exports.js"            // OK
import myFunc1 from "./exports.js"          // OK

// ---------------------------------

console.log("5. func1: %s", func1)          // OK
console.log("6. myFunc1: %s", myFunc1)          // OK


console.log()
console.groupEnd()