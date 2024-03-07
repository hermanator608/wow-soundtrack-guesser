import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { YoutubePlayer } from "./components/YoutubePlayer";
import StartGame from "./components/StartGame";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentQuestionState,
  getNextQuestion,
  videoShownState,
  gameStartedState
} from "./state";
import Typography from "@mui/material/Typography";
import UndoIcon from '@mui/icons-material/Undo';
import IconButton from '@mui/material/IconButton';
import ImageMapper, { ImageMapperProps, MapAreas } from 'react-img-mapper';
import { AllWorlds, IdToMapObject } from "./config/map-details";
import { MapDetails } from "./config/types";
import { Stack } from "./utils/MapStack";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button'; 
import ButtonGroup from '@mui/material/ButtonGroup';


function App() {
  const [currentQuestion, setCurrentQuestion] = useRecoilState(currentQuestionState);
  const [videoShown, setVideoShown] = useRecoilState(videoShownState);
  const [world, setWorld] = useState<Stack<MapDetails>>(new Stack<MapDetails>(5, AllWorlds));
  const [hoverArea, setHoverArea] = useState<String>();
  const [result, setResult] = useState<Boolean>();
  const [answer, setAnswer] = useState<String|undefined>();
  const gameStarted = useRecoilValue(gameStartedState);
  const [showAlert, setShowAlert] = useState<Boolean>(false);
  const [choice, setChoice] = useState<String|undefined>();

   let imageMapperProps: ImageMapperProps = {
     src: world.peek().img,
     map: world.peek(),
     width: 900,
     height: 600,
     onClick: (area: any) => addMap(area),
     onMouseEnter: (area: any) => enterArea(area),
     onMouseLeave: () => leaveArea(),
   }

  const removeMap = () => {
    //If user presses 'back' map button while the alert is being shown
    //Assume they don't want to submit that choice, call remove alert
    if (showAlert) {removeAlert()}

    let newStack = Stack.clone(world.getData());
    newStack.pop();
    setWorld(newStack);

  }

  const addMap = (area: MapAreas) => {
    if (!area.id) {
      console.log("Map Area Error: " + area + "\nID not defined.");
      return;
    }

    const newMap = IdToMapObject[area.id];
    if (!newMap) {
      setChoice(area.id);
      setShowAlert(true);

    } else {
      let newStack = Stack.clone(world.getData());
      newStack.push(newMap);
      setWorld(newStack);
    }
  }

  // On 'NO' click of alert
  const removeAlert = () => {
    setShowAlert(false);
    setChoice("");
  }

  // On 'YES' click of alert
  const evaluateChoice = () => {
    setShowAlert(false);
    setWorld(new Stack<MapDetails>(5, AllWorlds));
    setVideoShown(true);
    setResult(choice === currentQuestion.answerName);
    setAnswer(currentQuestion.answerName);

    setTimeout(() => {
        setResult(undefined);
        setVideoShown(false);
        setHoverArea("");
        setCurrentQuestion(getNextQuestion());
    }, 10000);
  
  }
  

  const enterArea = (area: MapAreas) => {
    setHoverArea(area.id);
  }

  const leaveArea = () => {
    setHoverArea("");
  }

  return (
    <div className="App">
      <Header />
      {(videoShown === true)
      ? <Typography 
          variant="h6"
          sx={{fontFamily: 'monospace', padding: 2}}
        >
          {result 
          ? <span>Correct: {answer}</span>
          : <span>Incorrect: {answer}</span>
          }
        </Typography>

      : <div className="photo">
            <ImageMapper {...imageMapperProps} />
            {!gameStarted && <StartGame/>}
            <IconButton 
              className="back-button"
              size="medium" 
              sx={{position:"absolute", backgroundColor: "white"}}
              disabled={!!videoShown || world.peek() === AllWorlds} 
              onClick={removeMap}
              title="Back one map" 
            > 
            <UndoIcon />
            </IconButton>
            {!showAlert
            ? <></>
            : <Alert 
                className="alert-parent"
                severity="warning"
                action={
                  <ButtonGroup>
                    <Button color="inherit" size="small" onClick={evaluateChoice}>YES</Button>
                    <Button color="inherit" size="small" onClick={removeAlert}>NO</Button>
                  </ButtonGroup>
                }
              >
              Is {choice} your final answer?
              </Alert>
            }
            <Typography
              variant="h6"
              className="zone-text"             
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }} 
            >
            {hoverArea}
            </Typography>
        </div>
      }

      <div className="youtube-player-parent">
        <YoutubePlayer />
      </div>
      
    </div>
  );
}

export default App;


