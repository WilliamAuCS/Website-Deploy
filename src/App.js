import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Mysteria from './projects/Mysteria.jsx';
import CubeRunner from './projects/CubeRunner.jsx';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Mysteria" component={Mysteria}/>
        <Route path="/Cuberunner" component={CubeRunner}/>
      </div>

    </Router>
  );
}

export default App;
