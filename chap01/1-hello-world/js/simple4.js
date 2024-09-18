console.clear();
console.group("js/simple4.js");

// ---------------------------------

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        console.debug("LikeButton::constructor(", props, ") invoked.");
        
        this.state = { liked: false }; // Immutable    <--- ***
    } // constructor

    render() {
        console.debug("LikeButton::render() invoked.");
        console.log("\t+ this.state:", this.state);

        const text = this.state.liked ? "Cancel" : "Like";

        // React.createElement(component, props, ...children) => ReactElement
        return React.createElement(
            "button",

            // onclick: XX, "on+EventTypeName" by "Camel" Notation
            // React.Component.prototype.setState = function (partialState, callback) {}
            { onClick: () => this.setState({ liked: !this.state.liked }) },
            
            text
        ); // React.createElement
    } // render

} // end class

// ---------------------------------

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 }; // Immutable.   <--- ***
    } // constructor

    render() {
        console.debug("Container::render() invoked.");
        console.log("\t+ this.state:", this.state);

        /*  The following elements:
              <div>
                  <button onclick>Like</button>
                  
                  <div style="{ margin-top: 20; }">
                      <span>Current Count:</span>
                      <span>0</span>
                      <p></p>
                      
                      <button onclick>Increase</button>
                      <button onclick>Decrease</button>
                  </div>
              </div>
        */

        // Implemented using "JSX" syntax, *NOT* "React.createElement" method.
        return (
          <div>
              <LikeButton/>

              <div style={ { marginTop: 20 } }>
                  <span>Current Count: </span>
                  <span>{ this.state.count }</span>
                  <p></p>

                  <button onClick={ () => this.setState({ count: this.state.count + 1 }) }>Increase</button>
                  <button onClick={ () => this.setState({ count: this.state.count - 1 }) }>Decrease</button>
              </div>
          </div>
        ) // JSX
    } // render

} // end class

// ---------------------------------

const divContainer = document.querySelector("#react-root");

// ---------------------------------

// function render(element, container, callback), callback: No Arguments    <--- ***
// 1. If parent "Container" element re-rendered,
//    All below children elements also re-rendered together.                <--- ***
// 2. But the only one child element re-rendered, that's it but nothing.    <--- ***

// React.createElement(component, props, ...children) => ReactElement       <--- ***
//  - expected a "string" (for built-in components) or a "class/function" (for composite components)
ReactDOM.render(React.createElement(Container), divContainer);


console.groupEnd();



