//source: https://gist.github.com/EduardoSaverin/04d7d9529dfaf8cc9a404bb458bb8dbb

import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { Link } from 'react-router-dom';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LogSignIn extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.padding}>
                    <div className={classes.margin}>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Face />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="pwd" label="Password" type="password" fullWidth required />
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }} justify="space-between">
                            <Grid item>
                                <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Sign In</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
                <Paper className={classes.padding} style={{ marginTop: '10px' }}>
                    <div className={classes.margin}>
                        <Grid container justify="center">
                            <Grid item>
                                <Link to="/form">
                                    <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>
                                      See example form
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(LogSignIn);
