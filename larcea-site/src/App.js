import React, { Component } from 'react';
import BasicsContainer from "./Components/Basics/BasicsContainer";
import Footer from "./Components/Basics/Footer";
import GlitchForm from "./Components/Form/Form";
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
        <BrowserRouter>
          <BasicsContainer/>
          <Route key="route2" exact path="/form" component={() => <GlitchForm/>}/>
          <Route key="route1" exact path="/" component={() =>
            <div>
              <div style={{
                textAlign: 'center',
                paddingTop: '1rem',
              }}>
                <img src="letter_l_small_ascii.png" />
              </div>
              <div style={{
                maxWidth: '38rem',
                padding: '2rem',
                paddingTop: '0px',
                margin: 'auto',
                backGroundColor: '#f8f8f8',
                textAlign: 'center',
              }}>
                <h1>Larcea, un bug bounty plus humain</h1>
                <h3>Qu'est-ce que le bug bounty?</h3>
                <p>
                  C’est quand une entreprise fait appel à
                  des particulliers pour trouver des failles
                  de sécurité dans leurs systèmes
                </p>
                <h3>
                  Larcea, q’est ce que c’est?
                </h3>
                <p>
                  C’est une plateforme de
                  Bug Bounty <g>Open Source</g>
                  sous license LGPLv3, qui
                  prévilégie la relation entre le
                  bug-hunter et l’entreprise
                </p>
              </div>
            </div>
          }/>

          <p>
            { this.props.response }
          </p>
          <Footer/>

        </BrowserRouter>
      </Box>
    );
  }
}
//        <img src="letter_l_small_ascii.png" />
//        <img src="letter_l_medium_ascii.png" />
//        <img src="letter_l_large_ascii.png" />

export default App;
