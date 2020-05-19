import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "react-loader-spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }
  render() {
    if (this.state.errMessage && !this.state.lat)
      return <div>Error: {this.state.errMessage}</div>;
    if (!this.state.errMessage && this.state.lat)
      return <div>Latitude: {this.state.lat}</div>;
    return (
      <div>
        <Loader type='ThreeDots' color='#00BFFF' height={100} width={100} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
