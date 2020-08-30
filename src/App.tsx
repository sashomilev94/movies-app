/*
	External Dependencies
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

/*
	Internal Dependencies
 */
import './App.css';
import Table from './containers/Table/Table'
import AddMovie from './containers/AddMovie/AddMovie'

const App = () => {
  return (
    <div className="App">
      <Switch>
      	<Route path="/movies" component={Table} />
      	<Route path="/add-movie" component={AddMovie} />
      	<Redirect from="/" to="/movies" />
      </Switch>
    </div>
  );
}

export default App;
