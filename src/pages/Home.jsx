import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import SideBar from '../components/SideBar.jsx';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="background" />
                <div className="otherStuff">
                    <Navbar />
                    <Jumbotron title="William Au" subtitle="Bachelor of Science, Computer Science" />
                    <SideBar />
                        <div className="bio">
                            <p>
                                <h2>Welcome</h2>
                                <br />
                                It is a great time.
                            <br /><br />
                                With technology at its peak, great developers are on the rise. Having multiple programming languages, libraries, 
                                and frameworks at our disposal, we are able to create what people 20 years ago thought to be impossible.
                            <br /><br />
                                My name is William Au and I am a senior in Computer Science. My passion for mathematics and technology led me to my
                                interest in computer science. I enjoy solving problems analytically and in the most efficient way possible. 
                                Programming is a fun pastime as well as a great way to make a difference.
                            <br /> <br />
                                In addition to programming and building computers, I also enjoy playing nearly all sports, including 
                                baseball, basketball, and football, as well as keeping in shape by running and going to the gym. 
                            <br /><br />
                                <p>
                                    <a href="https://drive.google.com/file/d/1YpsUWaT6cBrFBQp9Ge4BZdWvaWrHg8dm/view?usp=sharing" target="_blank"> My Resume </a>
                                </p>
                            </p>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home