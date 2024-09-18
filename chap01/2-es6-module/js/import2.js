console.clear()
console.group("./import2.js")
console.log()


// import { func2 as myFunc2 } from "./exports.js"     // OK

// import func1 as myFunc2 from "./exports.js"         // XX, "as" keyword canot apply to export default module
import myFunc2 from "./exports.js"                  // OK, export default module (func1) renamed as "myFunc2"

// ---------------------------------

console.log("myFunc2: %s", myFunc2)


console.log()
console.groupEnd()


