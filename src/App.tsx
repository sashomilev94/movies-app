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
import EditMovie from './containers/EditMovie/EditMovie'

const App = () => {
  return (
    <div className="App">
      <Switch>
      	<Route path="/movies" component={Table} />
      	<Route path="/add-movie" component={AddMovie} />
      	<Route path="/edit-movie" component={EditMovie} />
      	<Redirect from="/" to="/movies" />
      </Switch>
    </div>
  );
}

export default App;
