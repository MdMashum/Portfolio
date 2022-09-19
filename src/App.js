import React from 'react';
import { Switch, Route, Link, BrowserRouter, Router } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio';
import Resume from './component/Resume';
import Contact from './component/Contact';
import './App.css'


function App() {
  return (
      <div>
      <BrowserRouter >
        
        <Switch >
          <Route exact path="/" component={Home} />
          <Route   exact path="/about" component={About} />
          <Route   exact path="/service" component={Service} />
          <Route  exact path="/portfolio" component={Portfolio} />
          <Route  exact path="/resume" component={Resume} />
          <Route  exact path="/contact" component={Contact}/>         
        </Switch>
        </BrowserRouter>
      </div>
  );
  
}



export default App;
