import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./View/Index";
import Header from "./View/Layout/Header";
import Footer from "./View/Layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Suspense fallback="loading">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
