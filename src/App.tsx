import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';

import { GameContext, gameDataDefault } from './data/game-context';
import Questions from './pages/Questions/Questions';

function App() {
  const [gameState, setGameState] = useState(gameDataDefault);
  return (
    <GameContext.Provider value={gameState}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home updateGameContext={setGameState} />
          </Route>
          <Route exact path="/questions">
            <Questions />
          </Route>
        </Switch>
      </Router>
    </GameContext.Provider>
  );
}

export default App;
