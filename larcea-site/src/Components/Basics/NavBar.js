
//source: https://codesandbox.io/s/38wm039565

import React, {Component} from 'react';
import NavDrawer from "./NavDrawer";

//MATHERIAL UIS
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Typography} from "@material-ui/core";
import {Button} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link } from 'react-router-dom';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            onClick={() => this.props.toggleDrawer(true)}
                        >
                            <MenuOpenIcon/>
                        </IconButton>
                        <Box ml={4}>
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Typography variant="h6" color="inherit">
                                    Larcea
                                </Typography>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>

                <NavDrawer
                    drawerOpened={this.props.drawerOpened}
                    toggleDrawer={this.props.toggleDrawer}
                />
            </div>
        );
    }
}

export default NavBar;
