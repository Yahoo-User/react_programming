console.clear();
console.group("js/simple3.js");
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
    }, text); // React.createElement
  } // render
} // end class

class Container extends React.Component {
  constructor(props) {
    super(props);
    console.debug("Container::constractructor(", props, ") invoked.");
    this.state = {
      count: 0
    }; // Immutable.   <--- ***
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
                <button onclick>Increase</button>
                <button onclick>Decrease</button>
            </div>
        </div>
    */

    // React.createElement(component, props, ...children) => ReactElement
    return React.createElement(
    // #1
    "div", null, React.createElement(LikeButton),
    // #2
    React.createElement(
    // #3
    "div", {
      style: {
        marginTop: 20
      }
    }, React.createElement("span", null, "Current Count: "),
    // #4
    React.createElement("span", null, this.state.count),
    // #5
    React.createElement("p", null),
    // #8
    React.createElement(
    // #6
    "button",
    // onclick: XX, "on+EventTypeName" by "Camel" Notation
    {
      onClick: () => this.setState({
        count: this.state.count + 1
      })
    }, "Increase"), React.createElement(
    // #7
    "button",
    // onclick: XX, "on+EventTypeName" by "Camel" Notation
    {
      onClick: () => this.setState({
        count: this.state.count - 1
      })
    }, "Decrease")));
  } // render
} // end class

const divContainer = document.querySelector("#react-root");

// function render(element, container, callback), callback: No Arguments    <--- ***
// 1. If parent "Container" element re-rendered,
//    All below children elements also re-rendered together.                <--- ***
// 2. But the only one child element re-rendered, that's it but nothing.    <--- ***

// React.createElement(component, props, ...children) => ReactElement       <--- ***
ReactDOM.render(React.createElement(Container), divContainer);
console.groupEnd();