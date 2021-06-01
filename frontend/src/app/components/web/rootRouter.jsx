import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/home/index'
export default function rootRouter() {
    return (
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    )
}
