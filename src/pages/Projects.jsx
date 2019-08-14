import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="background"/>
                <div className="otherStuff">
                    <Navbar />
                    <Jumbotron title="My Projects" subtitle="Project Spotlight" />
                    <div className="container">
                        <p className="overview">
                            <h1>Projects</h1>
                            The projects listed below are a few of my favorite projects I have completed, or are still in progress. Many are projects completed
                            in a team of two or more programmers, however there are also many I have completed myself. Below each project is a brief
                            description, including a screenshot of the actual project. If you wish to learn more, you may click on the project
                                name and a more in-depth explanation will be displayed. <br />
                            (If you are not redirected, the page is still in progress and will be up soon!)
                            </p>
                        <div className="projectList">

                            <div className="projectFormat">
                                <img id="picPadding" src={require('../images/Mysteria1.PNG')} height="200" width="200" alt="Mysteria"
                                    title="Picture of my in progress Mysteria RPG game" align="left" />
                                <p className="discription">
                                    <Link to="/Mysteria"><h2>Mysteria</h2></Link>

                                    This project was my first major game created using the Unity Engine. This game is an RPG style, tile based game
                                    allowing the player to make decisions that will help progress the storyline, as well as make NPC friends.
                                    <br /><br />
                                    <a href="https://github.com/WilliamAuCS/Mysteria" target="_blank"> GitHub </a>
                                </p>
                            </div>

                            <div className="projectFormat">
                                <img id="picPadding" src={require('../images/mysql logo.png')} height="200" width="200" alt="mySQL logo"
                                    title="My first database project" align="left" />
                                <p className="discription">
                                    <Link><h2>MySQL Database</h2></Link>

                                    This project was completed for my 332 Database course. It was my first time creating a database, and really sparked
                                    my interest in the field. I was in a team with two other students, and it soon became one of
                                    the most fun I've had completing a project. 
                                    <br /><br />
                                </p>
                            </div>

                            <div className="projectFormat">
                                <img id="picPadding" src={require('../images/discord logo.png')} height="200" width="200" alt="mySQL logo"
                                    title="My Discord bot" align="left" />
                                <p className="discription">
                                    <Link><h2>Discord Bot <h6>(In Progress)</h6></h2></Link>

                                    After completing my Database and React Website projects, I decided to combine the two into a new project. I am using Discord.js and
                                    SQL to create a Discord bot that not only responds to commands, but also implements its own game and currency for users. This 
                                    information is stored and retreved in the SQL database. 
                                    <br /><br />
                                </p>
                            </div>

                            <div className="projectFormat">
                                <img id="picPadding" src={require('../images/object_cube.png')} height="200" width="200" alt="Cube Runner"
                                    title="Picture of my first completed game" align="left" />
                                <p className="discription">
                                    <Link to="/Cuberunner"><h2>Cube Runner</h2></Link>

                                    This was my first Unity project. Starting off, I used many tutorials learning how to utilize the Unity rigid body
                                    system and implimenting physics. The game is playable with multiple complete levels, challenging even the best players.
                                </p>
                            </div>

                            <div className="projectFormat">
                                <img id="picPadding" src={require('../images/react-logo.png')} height="200" width="200" alt="My Website"
                                    title="I used the JavaScript library React to complete this website" align="left" />
                                <p className="discription">
                                    <Link><h2>This Website</h2></Link>

                                    This is the website you are currently looking at. I created this website using the JavaScript React library. Creating
                                    this website was a challenge at first, for it was the first time experience the front-end of programming, however the
                                    concept quickly became familiar. This website will continue to be in development as I learn more about the React library.
                                    <br /><br />
                                    <a href="https://github.com/WilliamAuCS/WilliamAu-Website" target="_blank"> GitHub (Pre-Deploy)</a><br />
                                    <a href="https://github.com/WilliamAuCS/Website-Deploy" target="_blank"> GitHub (Deployed)</a>
                                </p>
                            </div>

                        </div>
                    </div>
                    <Footer />
                </div >
            </div>
        );
    }
}

export default Projects