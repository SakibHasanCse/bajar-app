import React from 'react'
import rootRouter from '../app/components/web/rootRouter'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={rootRouter} />

                </Switch>
            </Router>

        </div>
    )
}

export default App
