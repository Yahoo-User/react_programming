console.clear();
console.group("js/simple2.js");
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    console.debug("LikeButton::constructor(", props, ") invoked.");
    this.state = {
      liked: false
    }; // Immutable.
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

const divContainer1 = document.querySelector("#react-root1");
const divContainer2 = document.querySelector("#react-root2");
const divContainer3 = document.querySelector("#react-root3");

// React.createElement(component, props, ...children) => ReactElement       <--- ***

// function render(element, container, callback), callback: No Arguments    <--- ***
// 1. If parent "Container" element re-rendered,
//    All below children elements also re-rendered together.                <--- ***
// 2. But the only one child element re-rendered, that's it but nothing.    <--- ***

ReactDOM.render(React.createElement(LikeButton), divContainer1);
ReactDOM.render(React.createElement(LikeButton), divContainer2);
ReactDOM.render(React.createElement(LikeButton), divContainer3);
console.groupEnd();