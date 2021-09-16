import { Card, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../data/game-context';

import Header from '../../components/Header';
import {revenueList} from '../../constants/index';
import { getQuestions } from '../../api/questions';
import { useHistory } from 'react-router';

import './questions.css'

const Questions = () => {
  const gameContext = useContext(GameContext);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [endGame, setEndGame] = useState(false);
  
  useEffect(() => {
    loadQuestions()
    return () => {
    }
  }, [])

  const loadQuestions = async () => {
    const questions = await getQuestions();
    setQuestions(questions.results);
  }

  const selectedAnswer = (selected: string) => {
    const question = questions[currentQuestion];
    if (selected === question.correct_answer) {
      setCurrentQuestion(currentQuestion + 1);
      setRevenue(revenue + revenueList[currentQuestion].value)
    } else {
      setEndGame(true);
    }
  }

  return (
    <div>
      {gameContext &&
        <Header
          playerName={gameContext.playerName}
          difficulty={gameContext.difficulty}
          revenue={revenue}
        />
      }
        
      {!endGame &&
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <div>
              <Card className="question">
                {questions.length && 
                  <div>{questions[currentQuestion].question}</div>
                }
              </Card>
              {questions.length && questions[currentQuestion].incorrect_answers.map((inAns:string) => (
                <div onClick={() => selectedAnswer(inAns)}>{inAns}</div>
              ))}
              {questions.length && 
                <div onClick={() => selectedAnswer(questions[currentQuestion].correct_answer)}>
                  {questions[currentQuestion].correct_answer}
                </div>
              }
            </div>
          </Grid>
          <Grid item xs={4}>
            {revenueList.map(rev => <div>{rev.value}</div>)}
          </Grid>
        </Grid>
      }
      <Card>
        {endGame && <div>The game is over</div>}
      </Card>
    </div>
  )
}

export default Questions