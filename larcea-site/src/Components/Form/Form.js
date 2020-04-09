//source: https://gist.github.com/EduardoSaverin/04d7d9529dfaf8cc9a404bb458bb8dbb

import React from 'react';
import { FormHelperText, Select, MenuItem, Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class GlitchForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{
          maxWidth: '40rem',
          padding: '2rem',
          paddingTop: '0px',
          margin: 'auto',
          backGroundColor: '#f8f8f8',
          textAlign: 'center',
      }}>
        <h1>Use this form for injections</h1>
        <Paper className={classes.padding}>
          <div className={classes.margin}>
            <h2>1. Overview</h2>
            <h3>A. Location</h3>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="Path leading to the security breach"
                  type="text"
                  fullWidth
                  required
                />
                <TextField
                  id="sheh"
                  label="Vulnerable object used for the injection"
                  type="text"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <br />
            <h3>B. Means of exploitation</h3>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="Describe in a few words the context of the exploit"
                  type="text"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
        <br />
        <Paper className={classes.padding}>
          <div className={classes.margin}>
            <h2>2. Criticality evaluation</h2>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
              <Select
                fullWidth
                required
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
              <FormHelperText>Evaluate the importance of the injection from 1 to 3</FormHelperText>
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
              <Select
                fullWidth
                required
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
              <FormHelperText>Evaluate the ease of use of the injection from 1 to 3</FormHelperText>
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
              <Select
                fullWidth
                required
              >
                <MenuItem value={1}>Informative only</MenuItem>
                <MenuItem value={2}>Weak</MenuItem>
                <MenuItem value={3}>Medium</MenuItem>
                <MenuItem value={3}>Significant</MenuItem>
                <MenuItem value={3}>Critical</MenuItem>
              </Select>
              <FormHelperText>Evaluate the global impact of the vulnerability</FormHelperText>
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <p>Explain briefly the vulnerability's ease of exploitation, ease of discovery and impact</p>
                <TextField
                  id="username"
                  type="text"
                  fullWidth
                  multiline
                  required
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
        <br />
        <Paper className={classes.padding}>
          <div className={classes.margin}>
            <h2>3. Patching</h2>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="Location of the vulnerable code if known"
                  type="text"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="Potential locations of similar security breaches"
                  type="text"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="How to best patch the breach"
                  type="text"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="Other recommendations"
                  type="text"
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(GlitchForm);

