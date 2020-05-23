import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "react-loader-spinner";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("component was just updated - it rerendered...");
  }
  render() {
    if (this.state.errMessage && !this.state.lat)
      return <div>Error: {this.state.errMessage}</div>;
    if (!this.state.errMessage && this.state.lat)
      return <SeasonDisplay lat={this.state.lat} />;
    return (
      <div>
        <Spinner />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
