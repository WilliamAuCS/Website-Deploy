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
                                With technology at its peak, great developers are on the rise. With multiple programming languages, libraries, 
                                and frameworks at our desposal, we are able to create what people 20 years ago thought to be impossible.
                            <br /><br />
                                My name William Au and I am a senior in Computer Science. I picked this major because of my love for mathematics 
                                and science. I enjoy solving problems analytically and in the most efficient way possible. 
                                Programming is a fun pastime and also a great way to make a difference.
                            <br /> <br />
                                In addition to programming and building computers, I also enjoy playing nearly all sports, including 
                                baseball, backetball, and football, as well as keeping in shape by running and going to the gym. 
                            <br /><br />
                                <p>
                                    <a href="https://drive.google.com/file/d/1bYqF-I3wZi9ycUjLimC4D0XOCGQmS-fd/view?usp=sharing" target="_blank"> My Resume </a>
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