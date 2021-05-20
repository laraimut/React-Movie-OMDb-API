import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Single from './singlemovie';
const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/Single" component = {Single} />
        </Router>
    );
};
export default Webpages;