import React, { useContext } from 'react';
import { IHeaderData } from '../models';
import { GameContext } from '../data/game-context';
import { AppBar, Grid, Toolbar } from '@material-ui/core';


const Header = ({ playerName, difficulty, revenue }: IHeaderData) => {
  const context = useContext(GameContext);
  console.log(context)
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={3}>
            <Grid item xs={4}>
              <div>Player: {playerName}</div>
            </Grid>

            <Grid item xs={4}>
              <div>Level: {difficulty}</div>
            </Grid>

            <Grid item xs={4}>
              <div>Revenue: {revenue}</div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header