import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/questions">
          <Header playerName="Kath" difficulty="Easy" revenue={0} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
