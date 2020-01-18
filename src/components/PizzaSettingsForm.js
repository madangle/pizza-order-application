import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class PizzaSettingsForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        
        return (
            
            <React.Fragment>
                <Dialog open={true} fullWidth={true}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Pizza Order Settings
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box p={5}>
                <TextField
                    placeholder="Enter Total People Count"
                    label="Total number of people"
                    onChange={handleChange('totalNumberOfPeople')}
                    defaultValue={values.totalNumberOfPeople}
                    margin="normal" />
                <br/>
                <TextField
                    placeholder="Number Slices in a Pizza"
                    label="Total Number Slices in a Pizza"
                    onChange={handleChange('numberOfSlicesInAPizza')}
                    defaultValue={values.numberOfSlicesInAPizza}
                    margin="normal" />
                <br/>
                <TextField
                    placeholder="Maximum Slices Per Person"
                    label="Maximum Slices Per Person"
                    onChange={handleChange('maximumSlicesPerPerson')}
                    defaultValue={values.maximumSlicesPerPerson}
                    margin="normal" />
                <br/>
               
                <Button variant="contained" color="primary" onClick={this.continue}>
                    Next
                </Button>
                </Box>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default PizzaSettingsForm
