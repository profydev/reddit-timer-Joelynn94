import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import 'normalize.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
