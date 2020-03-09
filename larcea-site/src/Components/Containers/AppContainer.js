import React, {Component} from 'react';
import App from "../../App";

//redux stuff
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

//store
import {callAPI} from "../../Store/appState/actions";

class AppContainer extends Component {
    render() {
        return(
            <App
                response = {this.props.response}
                callAPI = {this.props.callAPI}
            />
        );
    }
}

//To update our props values with sotred state values
const mapStateToProps = state => {
    return {
        response: state.responseAPI.response
    };
}
//To let App component use callAPI function
const mapDispatchToProps = (dispatch) => {
    return {
        callAPI: bindActionCreators(callAPI, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);