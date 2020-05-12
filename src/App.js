import React from 'react';
import './scss/main.scss';
import {HashRouter as Router, Route, Switch, } from 'react-router-dom';

// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
// } from 'react-router-dom';

import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
// import SignUpPage from "./components/SignUp";



function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/login">
                  <LoginPage/>
              </Route>
              <Route exact path="/rejestracja">
                  <RegisterPage/>
              </Route>
              {/*<Route path="/test" component={SignUpPage} />*/}
          </Switch>
      </Router>
  );
}

export default App;
