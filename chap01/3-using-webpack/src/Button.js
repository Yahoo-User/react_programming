console.clear()
console.group("src/Button.js")


import React from "react"

// ---------------------------------

// "props" transfered by `React.createElement(Button, { label: "Like" })`

function Button(props) {
    console.debug("Button(", props, ") invoked.")

    // React.createElement(component, props, ...children) => ReactElement
    //  - expected a "string" (for built-in components) or a "class/function" (for composite components)
    return React.createElement("button", null, props.label)     // <--- ***
} // Button

// ---------------------------------

export default Button;


console.groupEnd()

