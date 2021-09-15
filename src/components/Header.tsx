import React from 'react';
import { IHeaderData } from '../models/player';


const Header = ({ playerName, difficulty, revenue }: IHeaderData) =>
  (<header>
    <div>Player: {playerName}</div>
    <div>Level: {difficulty}</div>
    <div>Revenue: {revenue}</div>
  </header>)

export default Header