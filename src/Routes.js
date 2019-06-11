import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";
import HomePageContainer from "./containers/HomePageContainer";
import CartPageContainer from "./containers/CartPageContainer";
import AboutPage from "./pages/AboutPage";

export default function Routes() {
  return (
    <Router>
      <App>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/cart" component={CartPageContainer} />
        <Route path="/about" component={AboutPage} />
      </App>
    </Router>
  );
}
