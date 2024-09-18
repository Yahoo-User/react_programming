console.clear()
console.group("./import1.js")
console.log()


import func1, { func2, variable1, variable2 } from "./exports.js"   // OK

console.log("1. func1:\t%s", func1)
console.log("2. func2:\t%s", func2)
console.log("3. variable1:\t%s", variable1)
console.log("4. variable2:\t%s", variable2)

// ---------------------------------

// OK, "default" module could be imported by "as" keyword.
import myfunc from "./exports.js"                                   // OK
// import myfunc, { func2, variable1, variable2 } from "./exports.js"  // OK
console.log("5. func1:\t%s", myfunc)     // OK


console.log()
console.groupEnd()

