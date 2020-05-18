import React from 'react'
import History from './helpers/History'
import {
    Route,
    Router,
    Switch,
    Redirect,
} from 'react-router-dom'

// Paginas
import Home from './containers/Home'

const Routes = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  )
}

export default Routes