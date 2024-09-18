import logo1 from './logo.svg';
import './App.css';


// Import necessary image files:

/**
 * Module not found: Error: You attempted to import "/large.jpg"
 * which falls "outside" of the project "src/"" directory.
 * "Relative" imports "outside" of "src/" are not supported.
 * You can either move it inside "src/", or add a "symlink" to it from project's "node_modules/".

import smallImage from "/large.jpg"    // XX, >  10KB
import largeImage from "/small.png"    // XX, <= 10KB
 */

/**
 * Module not found: Error: Can't resolve 'large.jpg' in 'C:\app\...\1-by-npx\src'
 * Did you mean './large.jpg'?
 * Requests that should resolve in the current directory need to start with './'.
 * Requests that start with a name are treated as module requests and resolve within module directories
 * (node_modules, C:\app\...\1-by-npx\node_modules).
 * If changing the source code is not an option there is also a resolve options called 'preferRelative'
 * which tries to resolve these kind of requests in the current directory too.

import smallImage from "large.jpg"    // XX, >  10KB
import largeImage from "small.png"    // XX, <= 10KB
 */

import smallImage from "./large.jpg"    // OK, >  10KB
import largeImage from "./small.png"    // OK, <= 10KB


function App() {
    return (
        <div className="App">
            {/* img elements must have an alt prop, either with meaningful text, or an empty string for decorative images. */}
            <img src={smallImage} alt="smallImage"/>
            <img src={largeImage} alt="largeImage"/>
            <p>&nbsp;</p>

            <header className="App-header">
                <img src={logo1} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React Heartly !!!
                </a>
              </header>
        </div>
    );
} // App


export default App;
