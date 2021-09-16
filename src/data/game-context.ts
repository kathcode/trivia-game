import React, { createContext } from 'react';
import { IGameData } from '../models';

export const gameDataDefault: IGameData = {
  playerName: '',
  revenue: 0,
  difficulty: '',
  category: 9,
}

export const GameContext = createContext(gameDataDefault);