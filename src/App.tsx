import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About'

function App() {
  return (
    <div className={"pageRoot"}>
      <div className={"pageInnerContainer"}>
        
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/About">
                        <About/>
                    </Route>        
                </Switch>
            </Router> 
    </div>      
  </div>   
    );
  }
  
  
export default App; 
