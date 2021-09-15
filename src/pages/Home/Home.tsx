import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { IInputs } from '../../models/general';
import { categoryList, difficultyList } from '../../constants/index';

import './home.css';

const Home = () => {
  const onSubmit: SubmitHandler<IInputs> = data => console.log(data);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState('Any Difficulty');
  const [name, setName] = useState('')

  const handleSubmit = () => {
    console.log(category, difficulty, name)
  }

  return (
    <div className="home">
      <form>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <FormControl>
                <TextField
                  label="Name"
                  variant="outlined"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl variant="filled">
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Category"
                  value={category}
                  autoWidth={true}
                  className="select"
                >
                  {categoryList.map(cat =>
                    <MenuItem
                      key={cat.id}
                      onClick={(e) => setCategory(cat.id)}
                      value={cat.id}>
                      {cat.name}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl variant="filled">
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Difficulty"
                  value={difficulty}
                  autoWidth={true}
                  className="select"
                >
                  <MenuItem value="">
                    <em>Any Difficulty</em>
                  </MenuItem>
                  {difficultyList.map(diff =>
                    <MenuItem
                      key={diff}
                      onClick={(e) => setDifficulty(diff)}
                      value={diff}>
                      {diff}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                type="button"
                size="large"
                onClick={handleSubmit}
              >Start</Button>
            </Grid>
          </Grid>
      </form>
    </div>
  )
}

export default Home