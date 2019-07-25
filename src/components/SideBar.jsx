import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <a className="pic" a />
                <div className="info">
                    <h3>William Au</h3>
                    <br />
                    <div className="degrees">
                        <h5>Cal State Fullerton</h5>
                        BS - Computer Science <br />
                        (In progress)
                    <br />
                        <br />
                        <h5>Golden West College</h5>
                        <p className="degrees">
                            AA - Comp Sci & Technology <br />
                            AA - Mathematics <br />
                            AA - Arts & Humanites <br />
                            AA - Elem Education <br />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;