import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="content">
          <Switch> {/*without Switch, you would have to use attribute 'exact' to get exact paths, order elements by specificity*/}
            <Route
              path="/products/:id"
              component={ProductDetails}
            />
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />

            <Route
              path="/posts/:month?/:year?"
              component={Posts}
            />
            <Redirect from="/messages" to="/posts" />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" exact component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />

          </Switch>
        </div>
      </div >
    );
  }
}

export default App;
