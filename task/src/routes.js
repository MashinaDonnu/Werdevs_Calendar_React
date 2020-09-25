import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

export const routes = (
    <Switch>
        <Route path="/" exact component={Home} />
        <About path="/about" component={About} />
        <Redirect to="/" />
    </Switch>
)