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
                    <Route path="/Photos" exact component={Photos} />
                    <Route path="/Contact" exact component={Contact} />
                    <Route path="/Releases" exact component={Releases} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;