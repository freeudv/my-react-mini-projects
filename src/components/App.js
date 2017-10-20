import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Toolbar, Drum, Clock, Filters, Accordion } from 'components'
import keys from '../data/keys'
import menu from '../data/menu'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Toolbar />

        <Switch>
          <Route exact path="/" render={() => <Drum keys={keys} />} />
          <Route path="/watch" component={Clock} />
          <Route path="/filters" component={Filters} />
          <Route path="/accordion" render={() => <Accordion items={menu} />} />
        </Switch>
      </div>
    )
  }
}

export default App
