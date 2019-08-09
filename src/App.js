import React from 'react';
import Home from './components/Home';
import Bio from './components/Bio';
import Videos from './components/Videos';
import Music from './components/Music';
import Contact from './components/Contact';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/' id='home-link'>Danielle Tatarian</Link></li>
            <li><Link to='/music'>Music</Link></li>
            <li><Link to='/videos'>Videos</Link></li>
            <li><Link to='/bio'>About</Link></li>
            <li><Link to='/contact' onClick={(e) => alert("STUFF")}>Contact</Link></li>
          </ul>
          <Route exact path='/' component={Home} />  
          <Route exact path='/bio' component={Bio} />  
          <Route path='/videos' component={Videos} /> 
          <Route path='/music' component={Music} /> 
          <Route path='/contact' component={Contact} /> 
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
