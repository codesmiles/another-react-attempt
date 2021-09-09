import "./styles.css";
import React from "react";
// import ReactDOM from 'react-dom';

export class Cars extends React.Component {
  render() {
    return (
      <div>
        <h2>I hope this car shit finally {this.props.brand} works</h2>
        <p>Wahala be like</p>
      </div>
    );
  }
}

// IT TURNS OUT THAT WHAT THE MENT BY AN ENLOSING TAG IS JUST ALL TAGS WRAPPED AROUND EACH OTHER NOT BESIDES EACHOTHER
// YOU CAN CREATED DIVS AND INPUT YOUR ELEMENTS THERE IN THE RETURN SECTION OF A CLASS
//  class Garage extends React.Component {
//   render() {
//     const name = `Like who cares`;
//     return (
//       <div>
//         <h2>I just dey catch cruise at this point</h2>

//         <Cars brand={name} />
//       </div>
//     );
//   }
// }
// export default Garage;
// ReactDOM.render(<Garage />, document.getElementById("root"));

// export default class App() {
//   return (
//     <div className="App">
//       {/* <Car /> */}
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
