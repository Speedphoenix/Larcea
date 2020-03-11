import React, {Component} from 'react';
import NavBar from "../Basics/NavBar";

//redux stuff
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

//store
import {toggleDrawer} from "../../Store/navBarState/actions";

class NavBarContainer extends Component {
    render() {
        return (
            <div>
                <NavBar
                    drawerOpened = {this.props.drawerOpened}
                    toggleDrawer = {this.props.toggleDrawer}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        drawerOpened: state.navBarElementState.drawerOpened
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: bindActionCreators(toggleDrawer, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);