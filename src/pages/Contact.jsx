import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="background" />
                <div className="otherStuff">
                    <Navbar />
                    <Jumbotron title="Contact" subtitle="Feel free to contact me!" />
                    <div className="contactContainer">
                        <img id="picPadding" src={require('../images/meAtPC.jpg')} height="300" width="220" alt="Me"
                            title="Picture of myself" align="right" />
                        <h2>Contact</h2>
                        <p>
                            Feel free to contact me if you have any questions. Thanks!
                            <br /><br /><br />
                            Email: WilliamAuCS@Gmail.com
                            <br />
                            Phone: (909) 362-3303
                            <br />
                            Linked-In: https://www.linkedin.com/in/william-au-964ab616b/
                            <a href="https://www.linkedin.com/in/william-au-964ab616b/" target="_blank"> Link </a>
                            <br />
                            GitHub: https://github.com/WilliamAuCS
                            <a href="https://github.com/WilliamAuCS" target="_blank"> Link </a>
                            <br />
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact