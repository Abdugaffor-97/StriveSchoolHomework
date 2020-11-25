import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservations from "./components/Reservations";
import DishDetails from "./components/DishDetails";
import Menu from "./components/Menu";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar title="Strivestaurant" />
          <Route
            path="/"
            exact
            render={(props) => <Home title="Stefano" {...props} />}
          />
          <Route path="/menu" exact component={Menu} />
          <Route
            path="/reservation"
            exact
            render={() => <Reservations header={""} />}
          />
          <Route path="/details/:id" component={DishDetails} />
        </Router>
      </>
    );
  }
}

export default App;
