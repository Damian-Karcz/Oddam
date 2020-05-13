import React from 'react';
import '../../scss/main.scss';
import {HashRouter as Router, Route, Switch, } from 'react-router-dom';

// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
// } from 'react-router-dom';

import Home from "../Home";
// import LoginPage from "../LoginPage";
// // import RegisterPage from "../RegisterPage";
import SignUpPage from "../SignUp/SignUpPage";
import SignInPage from "../SignIn/SingInPage";
import PageAfterLogin from "../PageAfterLogin";
// import SignUpPage from "./components/SignUp";
import SignOutLayout from "../SignOut/SignOutLayout";



function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/login">
                  <SignInPage/>
              </Route>
              <Route exact path="/register">
                  <SignUpPage/>
              </Route>
              <Route exact path="/home">
                  <PageAfterLogin/>
              </Route>
              <Route exact path="/logout">
                  <SignOutLayout/>
              </Route>
              {/*<Route path="/test" component={SignUpPage} />*/}
          </Switch>
      </Router>
  );
}

export default App;
