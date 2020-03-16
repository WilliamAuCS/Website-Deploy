import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Sandbox.css';
import { Button } from '../projects/Sandbox/Calculator/Button';
import { Input } from '../projects/Sandbox/Calculator/Input';
import { ClearButton } from '../projects/Sandbox/Calculator/ClearButton';
import * as math from 'mathjs';


class Sandbox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }
    }

    addToInput = val => {
        this.setState({input: this.state.input + val});
    }

    // Using mathjs
    handleEqual = () => {
        this.setState({input: math.evaluate(this.state.input)})
    }

    render() {

        return (
            <div>
                <div className="background" />
                <div className="otherStuff">
                    <Navbar />
                    <Jumbotron title="Sandbox" subtitle="Test Environment" />
                    <div className="sandboxHeader">
                        <p>
                            <h1>Sandbox</h1>
                            <p>
                                Below is my test environment for ideas I may have. These projects
                                may not be complete and are still in development. <br />
                                Feel free to test them!
                            </p>
                        </p>
                    </div>
                    
                    <div className="calculator">
                        <div className="calc-header">
                            <h2>
                                Calculator
                            </h2>
                        </div>
                        {/* Followed guidlines from Brice Ayres */}
                        <div className="calc-wrapper">
                            <Input input={this.state.input}/>
                            <div className="button-row">
                                <Button handleClick={this.addToInput}>7</Button>
                                <Button handleClick={this.addToInput}>8</Button>
                                <Button handleClick={this.addToInput}>9</Button>
                                <Button handleClick={this.addToInput}>/</Button>
                            </div>
                            <div className="button-row">
                                <Button handleClick={this.addToInput}>4</Button>
                                <Button handleClick={this.addToInput}>5</Button>
                                <Button handleClick={this.addToInput}>6</Button>
                                <Button handleClick={this.addToInput}>*</Button>
                            </div>
                            <div className="button-row">
                                <Button handleClick={this.addToInput}>1</Button>
                                <Button handleClick={this.addToInput}>2</Button>
                                <Button handleClick={this.addToInput}>3</Button>
                                <Button handleClick={this.addToInput}>+</Button>
                            </div>
                            <div className="button-row">
                                <Button handleClick={this.addToInput}>.</Button>
                                <Button handleClick={this.addToInput}>0</Button>
                                <Button handleClick={() => this.handleEqual()}>=</Button>
                                <Button handleClick={this.addToInput}>-</Button>
                            </div>
                            <div className="button-row">
                                <ClearButton handleClear={() => this.setState({ input: "" })}>
                                    Clear
                                </ClearButton>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        );
    }


}
export default Sandbox