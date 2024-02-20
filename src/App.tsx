import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { YoutubePlayer } from "./components/YoutubePlayer";
import StartGame from "./components/StartGame";
import { useRecoilState } from "recoil";
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


function App() {
  const [currentQuestion, setCurrentQuestion] = useRecoilState(currentQuestionState);
  const [videoShown, setVideoShown] = useRecoilState(videoShownState);
  const [world, setWorld] = useState<Stack<MapDetails>>(new Stack<MapDetails>(5, AllWorlds));
  const [hoverArea, setHoverArea] = useState<String>();
  const [result, setResult] = useState<Boolean>();
  const [gameStarted, ] = useRecoilState(gameStartedState);

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
      confirmChoice(area.id);
      evaluateChoice(area.id);
    } else {
      let newStack = Stack.clone(world.getData());
      newStack.push(newMap);
      setWorld(newStack);
    }
  }

  //TODO: Change from alert to something else
  const confirmChoice = (choice: string) => {
    alert("Is " + choice + " your final answer?")
  }

  const evaluateChoice = (choice: string) => {
    
    setWorld(new Stack<MapDetails>(5, AllWorlds));
    setVideoShown(true);
    displayFeedback(choice === currentQuestion.answerName);

    setTimeout(() => {
        setResult(undefined);
        setVideoShown(false);
        setHoverArea("");
        setCurrentQuestion(getNextQuestion());
    }, 10000);
  
  }

  const displayFeedback = (result: Boolean) => {
    setResult(result);
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
      ? result===true
        ?<h3>Correct!</h3>
        :<h3>Incorrect!</h3>

      :  <div className="photo">
            <ImageMapper {...imageMapperProps} />
            {!gameStarted
              ?<StartGame />
              :<></> 
            }
            <IconButton 
              className="back-button"
              size="medium" 
              sx={{position:"absolute", backgroundColor: "white"}}
              disabled={!!videoShown || world.peek() === AllWorlds} 
              onClick={() => { removeMap(); }} 
            > 
            <UndoIcon />
            </IconButton>
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


