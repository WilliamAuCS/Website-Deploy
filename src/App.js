import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Sandbox from './pages/Sandbox.jsx';
import Contact from './pages/Contact.jsx';
import Mysteria from './projects/Mysteria.jsx';
import CubeRunner from './projects/CubeRunner.jsx';
import Pong from './projects/Pong.jsx';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Sandbox" component={Sandbox}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Mysteria" component={Mysteria}/>
        <Route path="/Cuberunner" component={CubeRunner}/>
        <Route path="/Pong" component={Pong}/>
      </div>

    </Router>
  );
}

export default App;
