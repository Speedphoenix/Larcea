import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { response: "" };
  }

  callAPI() {
    fetch("http://localhost:4001/test")
      .then(res => res.text())
      .then(res => this.setState({ response: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <h1>Larcea</h1>
        <p>
          { this.state.response }
        </p>
      </div>
    );
  }
}

export default App;
