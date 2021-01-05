import React from 'react'
import { HashRouter, Switch, Route, Link  } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'

export default function BaseRouter() {
    return (
        <HashRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>   
                        <Link to='/about'>about</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    )
    
}