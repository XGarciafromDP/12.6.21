import React from "react";
import "./styles.css";
import Card from "./components/card";

let data = {
  message: "I'm practicing passing props. Send help",
  number: 525600,
  desserts: ["Cheesecake", "Sour Straws", "Honey Bun"],
  gotit: true
};
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Practice with Passing Props!</h1>
        <Card />
      </div>
    );
  }
}

export default App;
