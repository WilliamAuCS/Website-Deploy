import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="botRight">
                    <span className="text-muted">William Au &#169; {new Date().getFullYear()} </span>
                </div>
            </footer>
        );
    }
}

export default Footer