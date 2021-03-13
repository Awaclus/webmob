import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./sivut/Home";
import Contact from "./sivut/Contact";
import Photos from "./sivut/Photos";
import Releases from "./sivut/Releases";
import history from './history';


class Routes extends Component {


    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Photos" component={Photos} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Releases" component={Releases} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;