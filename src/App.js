import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";

import ComponentRenderer from "ComponentRenderer.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Signinpage from "pages/Signinpage";
import Signuppage from "pages/Signuppage";
import Form from "pages/Form";
import EmailVarified from "pages/EmailVarifield";
import Dashboard from "pages/Dashboard";
import { PrivateRoute } from "privateRoute";
import VerifyNumber from "pages/VerifyNumber";
import PageNotFound from "pageNotFound";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>

        <Route path="/Form">
          <Form />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/Signin">
          <Signinpage />
        </Route>
        <Route path="/Signup">
          <Signuppage />
        </Route>
        <Route path="/EmailVarified">
          <EmailVarified />
        </Route>
        <Route path="/phoneVerify">
          <VerifyNumber />
        </Route>

        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <Route exact path="/">
          <SaaSProductLandingPage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}
