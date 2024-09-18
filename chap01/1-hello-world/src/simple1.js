console.clear();
console.group("js/simple1.js");

// console.debug("1. React:", React)                                   // An object literal with many properties.

/*
    React.Component:

    function q(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = U,
        this.updater = n || z
    }   // q
*/
// console.debug("2. React.Component:", React.Component)               // A constructor function declared in "React".

// console.debug("3. React.createElement:", React.createElement)       // A function declared in "React".
// console.debug("4. ReactDOM.render:", ReactDOM.render)               // function render(element, container, callback)

// console.debug("React.Component.render:", React.Component.render) // undefined
// console.debug("React.Component.state:", React.Component.state)   // undefined

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    console.debug("LikeButton::constructor(", props, ") invoked.");
    this.state = {
      liked: false
    }; // Immutable    <--- ***
  } // constructor

  render() {
    console.debug("LikeButton::render() invoked.");
    console.log("\t+ this.state:", this.state);
    const text = this.state.liked ? "Cancel" : "Like";

    // React.createElement(component, props, ...children) => ReactElement
    return React.createElement("button",
    // onclick: XX, "on+EventTypeName" by "Camel" Notation
    // React.Component.prototype.setState = function (partialState, callback) {}
    {
      onClick: () => this.setState({
        liked: !this.state.liked
      })
    }, text);
  } // render
} // end class

const divContainer = document.querySelector("#react-root");

// function render(element, container, callback), callback: No Arguments    <--- ***
// 1. If parent "Container" element re-rendered,
//    All below children elements also re-rendered together.                <--- ***
// 2. But the only one child element re-rendered, that's it but nothing.    <--- ***

// React.createElement(component, props, ...children) => ReactElement       <--- ***
ReactDOM.render(React.createElement(LikeButton), divContainer);
console.groupEnd();