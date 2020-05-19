import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err.message)
    );
    return <div>Latitude: {this.state.lat}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
