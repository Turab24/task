import React from 'react';
import './App.css';
import Nav from './nav';
import Home from './home';
import Shop from './shop';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">     
      <Nav />
      <Route path="/Home" component={Home}/>
      <Route path="/Shop" component={Shop}/>
    </div>
    </Router>
  );
}

export default App;
