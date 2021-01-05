import React from 'react'
import { HashRouter, Switch, Route, Link  } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import TodoList from '../pages/todoList'
import TodoListRedux from '../pages/todoListRedux'

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
                    <li>   
                        <Link to='/todolist'>todoList</Link>
                    </li>
                    <li>   
                        <Link to='/todolistredux'>todoListRedux</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/todolist">
                        <TodoList />
                    </Route>
                    <Route path="/todolistredux">
                        <TodoListRedux />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    )
    
}