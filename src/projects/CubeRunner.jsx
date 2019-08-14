import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './CubeRunner.css';

class CubeRunner extends Component {
    render() {
        return (
            <div>
                <div className="background"/>
                <div classname="projectContent">
                    <Navbar />
                    <Jumbotron title="Cube Runner" subtitle="2018" />
                    <div className="leftPics">
                        <img id="picFormat" src={require('../images/CubeRunner2.PNG')} height="300" width="300" alt="CubeRunnerImg2"
                            title="My first Unity game" />
                        <img src={require('../images/CubeRunner4.PNG')} height="300" width="300" alt="CubeRunnerImg4"
                            title="My first Unity game" />
                    </div>
                    <div className="rightPics">
                        <img id="picFormat" src={require('../images/CubeRunner5.PNG')} height="300" width="300" alt="CubeRunnerImg5"
                            title="My first Unity game" />
                        <img src={require('../images/CubeRunner6.PNG')} height="300" width="300" alt="CubeRunnerImg6"
                            title="My first Unity game" />
                    </div>
                    <div className="container">
                        <p>
                            <h2>Background</h2>

                            Cube Runner was my very first game created using the Unity engine. I used this project as a 'test' to learn the 
                            basics and capabilities of this engine, and see what larger games I could make in the future. 
                            <br /><br />
                            I watched multiple YouTube tutorial videos, as well as dozens of StackOverflow posts to familiarize
                            myself with the engine. After understanding the basics of the program, I started my 'test' project, Cube Runner. 
                            <br /><br />
                            <h2>Development</h2>

                            Cube Runner was extremly beneficial in learning how the engine worked. 
                            It allowed me to become familiar with physics, such as RigidBody3D and surface friction. I have used these multiple
                            times in the future for larger projects, such as in Mysteria. Creating this game also allowed me to learn the basics
                            of UI creation, such as creating simple Menu screens and even an Options menu, allowing the payer to configure the system
                            from within the game. 
                            <br /><br />
                            Cube Runner consists of a 3 dimentional block accelerating at a constant rate, requiring the player to position the block 
                            left or right to avoid hitting the walls. I used Unity events to register collisions, having the player restart the level from
                            the beginning. The player is also able to see their progress within the level by looking at the incrimenting distance traveled 
                            counter at the top of the screen. When the player reaches the end, the "Level Complete" UI will show, and the player will be 
                            redirected to the next level. 
                            <br /><br />
                            Major scrips were not nessessary in the creation of this game. The only scripts needed were in C#, including
                            player movement, player automatic acceleration (allowing the block to move without player control), collisions to 
                            restart or end the level, and when to display the UI. Although this game may now seem simplistic, it was essential to 
                            my path in game development and the creation of larger games, such as Mysteria. 
                            <br /><br />
                        </p>
                    </div>
                <Footer />
                </div>
            </div>
        );
    }
}

export default CubeRunner