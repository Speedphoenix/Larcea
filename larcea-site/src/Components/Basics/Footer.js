
//source:https://www.js-tutorials.com/react-js/react-layout-using-material-design/

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
        position:'absolute',
top:'100vh',
transform:'translateY(-100%)',
width:'100%',
    }
});

function Footer(props) {
    const { classes } = props;

    return (
        <footer className={classes.footer} style={{ textAlign: 'center' }}>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    ECE PPE Larcea Project
                </Typography>
                <Typography component="p">
                    @2020 All right reserved
                </Typography>
            </Paper>
        </footer>
    );
}

export default withStyles(styles)(Footer);
