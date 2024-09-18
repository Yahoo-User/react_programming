console.clear()
console.group("src/index.js")


import React from "react";
import ReactDOM from "react-dom"

// ---------------------------------

import Button from "./Button.js"

// ---------------------------------

function Container() {
    console.debug("Container() invoked.")

    /*
        <div>
            <p>Click The Button</p>
            <Button>Like</Button>
            <Button>Dislike</Button>
        </div>
    */

    // React.createElement(component, props, ...children) => ReactElement   <--- ***
    //  - expected a "string" (for built-in components) or a "class/function" (for composite components)
    return React.createElement(
        "div", null,

        // React.createElement(component, props, ...children) => ReactElement   <--- ***
        React.createElement("p", null, "Click The Button"),

        // ---------------------------------
        // 1st. method: by function
        // ---------------------------------

        React.createElement(Button, { label: "Like" }),                 // OK
        React.createElement(Button, { label: "DisLike" })               // OK

        // ---------------------------------
        // 2nd. method: by function returned "ReactElement" call            // XX
        // ---------------------------------

        // Uncaught TypeError: (0 , _Button_js__WEBPACK_IMPORTED_MODULE_2__.default)(...) is not a function
        // Button({ label: "Like" })(),                 // XX
        // Button({ label: "DisLike" })()               // XX

        // ---------------------------------
        // 3rd. method: by React.createElement(...)
        // ---------------------------------

        // React.createElement("button", null, "Like"),                        // OK
        // React.createElement("button", null, "DisLike")                      // OK
    )
} // Container

// ---------------------------------

const divContainer = document.querySelector("#react-root")

// ---------------------------------

// React.createElement(component, props, ...children) => ReactElement       <--- ***
//  - expected a "string" (for built-in components) or a "class/function" (for composite components)

// function render(element, container, callback), callback: No Arguments    <--- ***
// 1. If parent "Container" element re-rendered,
//    All below children elements also re-rendered together.                <--- ***
// 2. But the only one child element re-rendered, that's it but nothing.    <--- ***

// ReactDOM.render(React.createElement(Container), divContainer)        // OK
ReactDOM.render(Container(), divContainer)                          // OK


console.groupEnd()

