import React, { Component } from 'react';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import './View/shared/header';
import Navbar from './View/shared/nav';
import Footer from './View/shared/footer';


class App extends React.Component {
   render() {
      return (
         <div>
            <Navbar/>
            <Footer/>
         </div>
      );
   }
}


// Content passed in as children (Preferred)
export default App;
