import React, { Component } from 'react'
import PizzaSettingsForm from './PizzaSettingsForm';
import PizzaOrderForm from './PizzaOrderForm';
import PizzaOrderSummary from './PizzaOrderSummary';

export class PizzaOrder extends Component {
    state = {
        step: 1,
        totalNumberOfPeople: 0,
        totalNumberOfFlavours: 0,
        numberOfSlicesInAPizza: 6,
        maximumSlicesPerPerson:6,
        flavours : [
            "Margareta", "Peperoni", "Chicken Supreme"
        ]
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        }); 
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const {step} = this.state;
        const {totalNumberOfPeople, totalNumberOfFlavours, numberOfSlicesInAPizza, maximumSlicesPerPerson, flavours} = this.state;
        const values = {totalNumberOfPeople, totalNumberOfFlavours, numberOfSlicesInAPizza, maximumSlicesPerPerson, flavours};

        switch(step){
            case 1 : 
                return <PizzaSettingsForm
                handleChange={this.handleChange} 
                values={values}
                nextStep={this.nextStep} />;
            
            case 2 : 
                return <PizzaOrderForm 
                handleChange={this.handleChange} 
                values={values} 
                nextStep={this.nextStep}
                prevStep={this.prevStep} />;

            case 3 : 
                return <PizzaOrderSummary 
                prevStep={this.prevStep} />;
        }
    }
}

export default PizzaOrder
