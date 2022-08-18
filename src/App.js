import React from "react";
import "./styles.css";
class Show extends React.Component {
  constructor() {
    super();
    this.state = {
      dis: false
    };
  }
  render() {
    return (
      <>
        {this.state.dis ? <h2>show and hide</h2> : null}
        <button
          onClick={() => {
            this.setState({ dis: true });
          }}
        >
          show
        </button>
        <button
          onClick={() => {
            this.setState({ dis: false });
          }}
        >
          hide
        </button>
        <button
          onClick={() => {
            this.setState({ dis: !this.state.dis });
          }}
        >
          show/hide
        </button>
      </>
    );
  }
}
export default Show;
