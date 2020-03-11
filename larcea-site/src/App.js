import React, { Component } from 'react';
import BasicsContainer from "./Components/Basics/BasicsContainer";
import Footer from "./Components/Basics/Footer";

//Material UI
import Box from "@material-ui/core/Box";

class App extends Component {
 /* constructor(props) {
    super(props);
    this.state = { response: "" };
  }

  callAPI() {
    fetch("http://localhost:4001/test")
      .then(res => res.text())
      .then(res => this.setState({ response: res }))
      .catch(err => err);
  }
*/
  componentDidMount() {
    this.props.callAPI()
  }

  render() {
    return (
      <Box height="100vh" display="flex" flexDirection="column" >
        <BasicsContainer/>
        <h1>Larcea</h1>
        <p>
          { this.props.response }
        </p>
        <Footer/>
      </Box>
    );
  }
}

export default App;
