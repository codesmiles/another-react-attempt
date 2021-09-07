// import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

/*SO ALL MY LEARNING WORK HOPEFULLY */

/** THE USE OF THE {} LIKE TEMPLATE LITERAL */

// So it turnsout if statement is in everything even sass(CHECK FOR {TEXT})
const x = 5;
let text = "good merning";
x < 10 ? (text = `good night`) : (text = `Good evening`);

// CREATING A CLASS COMPONENT
class Car extends React.Component {
  // works as the fucking name projects in this case
  render() {
    return <h2>A car is a fucking liability</h2>;
  }
}

// THE conponent rendered into index.html(BY CHOICE)
const list = (
  <div id="container">
    <h1>Wahala be like interesting</h1>

    <nav>
      <ul>
        <li>Monday</li>
        <li>Tuesday</li>
        <li>Wednesday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
        <li>Sunday</li>
      </ul>
    </nav>
    <p>
      I hope this works {5 + 5} means is can do like basic {2 + 2} calculations
      here
    </p>
    <p>
      <b>This looks like a regular way to type a codebase</b> as long as the
      vibes is still on track you can write your whole html structure inyour
      index.js(because your index.js serves as your index.html)
    </p>
    {text}
    <Car />
  </div>
);
// ReactDOM.render(<Car/>, document.getElementById("root"));
ReactDOM.render(list, document.getElementById("root"));
