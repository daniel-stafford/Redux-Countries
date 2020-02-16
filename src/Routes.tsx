import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AppBar from 'components/AppBar'
import Home from 'pages/Home'
import CountryDetails from 'pages/CountryDetails'
import Basket from 'components/Basket'

const Routes = () => (
  <BrowserRouter>
    <AppBar />
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/basket/" component={Basket}></Route>
      <Route path="/country/:name" component={CountryDetails}></Route>
    </Switch>
  </BrowserRouter>
)

Routes.displayName = 'Routes'

export default Routes
