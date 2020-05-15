import React from 'react';
import '../../scss/main.scss';
import {HashRouter as Router, Route, Switch, } from 'react-router-dom';

import Home from "../Home";
import SignUpPage from "../SignUp/SignUpPage";
import SignInPage from "../SignIn/SingInPage";
import SignOutLayout from "../SignOut/SignOutLayout";
import ReturnItemsHome from "../ReturnItemsPage/ReturnItmesHome";



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
              <Route exact path="/logout">
                  <SignOutLayout/>
              </Route>
              <Route exact path="/oddaj-rzeczy">
                  <ReturnItemsHome/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
