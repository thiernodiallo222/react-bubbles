import React from "react";
import ProtectedRoute from './components/ProtectedRoute';
import ColorsList from './components/ColorList';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './components/Style.css';

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
       <Link to="/">Log in</Link>
       <Link to="/bubbles-page">bubbles</Link>

         
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/bubbles-page"
            component={BubblePage} />
           <ProtectedRoute exact path="/colors"
            component={ColorsList} />
          
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
