import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/products" component={ProductListingPage} />
        <Route path="/cart" component={ShoppingCartPage} />
      </Switch>
    </Router>
  );
};

export default App;
