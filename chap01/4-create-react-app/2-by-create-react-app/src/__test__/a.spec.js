// The following console code must be removed in the "jest" test file:
// (1) XXX.test.js  (2) XXX.spec.js)   <--- ***

// console.clear()
// console.group("src/util.spec.js")

// Import in body of module; reorder to "top".  <--- ***
import { add } from "../util"

it("Test for adding two number", () => {
    const result = add(1, 2)
    expect(result).toBe(3)
})  // it


// console.groupEnd()

