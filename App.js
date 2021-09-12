import React from "react";
import './App.css'
import {Route,Switch} from 'react-router-dom'
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import PgNtFnd from "./PgNtFnd";
function App()
{
    return(
        <>
        <h1>This is functional component</h1>
        <h3>Component Routing</h3>
        <Nav/>
        <Switch>
        <Route path="/about"><About/></Route>
        <Route path="/"exact={true}><Home/></Route>
        <Route path="*"><PgNtFnd/></Route>
        </Switch>

        </>
    )
}


 

export default App