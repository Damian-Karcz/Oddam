import React from 'react';
import '../../scss/main.scss';
import {HashRouter as Router, Route, Switch, } from 'react-router-dom';

import Home from "../Home";
import SignUpPage from "../SignUp/SignUpPage";
import SignInPage from "../SignIn/SingInPage";
import SignOutLayout from "../SignOut/SignOutLayout";
import ReturnItemsHome from "../ReturnItemsPage/ReturnItmesHome";
import PageSuccessForm from "../ReturnItemsPage/PageSuccessForm";
import * as ROUTES from "../../constants/routes";



function App() {
  return (
      <Router>
          <Switch>
              <Route exact path={ROUTES.HOME}>
                  <Home/>
              </Route>
              <Route exact path={ROUTES.SIGN_IN}>
                  <SignInPage/>
              </Route>
              <Route exact path={ROUTES.SIGN_UP}>
                  <SignUpPage/>
              </Route>
              <Route exact path={ROUTES.SIGN_OUT}>
                  <SignOutLayout/>
              </Route>
              <Route exact path={ROUTES.ITEMS}>
                  <ReturnItemsHome/>
              </Route>
              <Route exact path={ROUTES.FORM}>
                  <PageSuccessForm/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
