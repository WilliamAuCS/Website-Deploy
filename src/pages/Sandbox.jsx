import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Sandbox.css';


class Sandbox extends Component{

    render(){
        
        return(
            <div>
                <div className="background" />
                <div className="otherStuff">
                    <Navbar />
                    <Jumbotron title="Sandbox" subtitle="Test Environment" />
                    <div className="sandboxHeader">
                        <p>
                            <h1>Sandbox</h1>
                            <p>
                                Below is my test environment for ideas I might have. These projects
                                may not be complete and are still in development. If any projects are
                                complete, I will label them clearly and you are free to test them!
                            </p>
                        </p>
                    </div>
                    
                    <div class="calculator">
                        <input type="text" class="calculator-screen" value="" disabled/>
                        <div class="calculator-keys">
                            <button type="button" class="operator" value="+">+</button>
                            <button type="button" class="operator" value="-">-</button>
                            <button type="button" class="operator" value="*">&times;</button>
                            <button type="button" class="operator" value="/">&divide;</button>

                            <button type="button" value="7">7</button>
                            <button type="button" value="8">8</button>
                            <button type="button" value="9">9</button>

                            <button type="button" value="4">4</button>
                            <button type="button" value="5">5</button>
                            <button type="button" value="6">6</button>

                            <button type="button" value="1">1</button>
                            <button type="button" value="2">2</button>
                            <button type="button" value="3">3</button>

                            <button type="button" value="0">0</button>
                            <button type="button" class="decimal" value=".">.</button>
                            <button type="button" class="all-clear" value="cll-clear">AC</button>

                            <button type="button" class="equal-sign" value="=">=</button>


                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            );
    }


}
export default Sandbox