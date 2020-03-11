
//source: https://codesandbox.io/s/38wm039565

import React, {Component} from 'react';
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";

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
                            <ul>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3 etc...</li>
                            </ul>
                        </Box>
                    </div>
                </Drawer>
            </Box>

        );
    }
}

export default NavDrawer;