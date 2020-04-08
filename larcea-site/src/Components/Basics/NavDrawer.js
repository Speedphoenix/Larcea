
//source: https://codesandbox.io/s/38wm039565

import React, {Component} from 'react';
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import LogSignIn from "../LogSignIn/LogSignIn";

class NavDrawer extends Component {
    render() {
        return (
            <Box>
                <Drawer
                    anchor="left"
                    open={this.props.drawerOpened}
                    onClose={() => this.props.toggleDrawer(false)}
                >
                    <div>
                        <Box m={4}>
                            <LogSignIn/>
                        </Box>
                    </div>
                </Drawer>
            </Box>

        );
    }
}

export default NavDrawer;