import React, { Component } from 'react';
import {  BrowserRouter as Redirect, Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../../View/home/home';
import About from '../../View/home/about';
import Category from "../../View/Pages/Category";
import Products from "../../View/Pages/Products";
import Login, {fakeAuth} from "../../View/home/Login";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header col-md-2">
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div className="col-md-10">
          <div id="navbar" className="navbar-collapse ">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/admin">Admin area</Link>
            </li>
          </ul>
          </div></div>
        </div>
        </nav>

        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/products" component={Products} />
        </Switch>

      </div>
    );
  }
}

//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
    />
  );
};
//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};

export default Navbar;
