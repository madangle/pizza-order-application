import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class PizzaOrderSummary extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                        Pizza Order Summary
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Button variant="contained" onClick={this.back}>
                    Previous
                </Button>
                <Button variant="contained" color="primary" onClick={this.continue}>
                    Confirm
                </Button>
            </React.Fragment>
        )
    }
}

export default PizzaOrderSummary
