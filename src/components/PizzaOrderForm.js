import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';

export class PizzaOrderForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <Dialog open={true} fullWidth={true}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                        Order Your Pizza
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box p={5}>
                <InputLabel id="demo-simple-select-label">Choose Flavours</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select" 
                    value={values.flavours[0]}
                    onChange={handleChange('maximumSlicesPerPerson')}
                    >
                    {
                        values.flavours.map((flavour) => {
                            return <MenuItem value={flavour} key={flavour}>{flavour}</MenuItem>
                        })
                    }
                </Select>
                <br/>
                <TextField
                    placeholder="Number Slices in a Pizza"
                    label="Total Number Slices in a Pizza"
                    onChange={handleChange('numberOfSlicesInAPizza')}
                    defaultValue={values.numberOfSlicesInAPizza}
                    margin="normal" />
                <br/>
                <Button variant="contained" onClick={this.back}>
                    Previous
                </Button>
                <Button variant="contained" color="primary" onClick={this.continue}>
                    Next
                </Button>
                </Box>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default PizzaOrderForm
