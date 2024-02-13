import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { YoutubePlayer } from "./components/YoutubePlayer";
import { useRecoilState } from "recoil";
import {
  currentQuestionState,
  getNextQuestion,
  videoShownState
} from "./state";
import { Button, Card, CardActionArea, CardContent, Grid, Typography, styled } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import ImageMapper, { ImageMapperProps, MapAreas } from 'react-img-mapper';
import { AllWorlds, IdToMapObject } from "./config/map-details";
import { MapDetails, Stack } from "./config/types";

const Flexy = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


function App(props: any) {
  const [currentQuestion, setCurrentQuestion] = useRecoilState(currentQuestionState);
  const [videoShown, setVideoShown] = useRecoilState(videoShownState);
  const [world, setWorld] = useState<Stack<MapDetails>>(new Stack<MapDetails>(5, AllWorlds));
  const [hoverArea, setHoverArea] = useState<String>();
  const [result, setResult] = useState<Boolean>();
  const [score, setScore] = useState<number>(0);

   let imageMapperProps: ImageMapperProps = {
     src: world.peek().img,
     map: world.peek(),
     width: 900,
     height: 600,
     onClick: area => addMap(area),
     onMouseEnter: area => enterArea(area),
     onMouseLeave: area => leaveArea(),
   }

  const removeMap = () => {
    let newStack = Stack.clone(world.getData());
    newStack.pop();
    setWorld(newStack);
  }

  const addMap = (area: MapAreas) => {
    if (!area.id) {
      alert("Bug - id not defined")
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
    if (result) setScore(score + 1);
    // if (score === 5) //TODO: End Game
    
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
      :<div className="map-area">
        <div className="presenter">
          <div className="photo">
            <ImageMapper {...imageMapperProps} />
            <Typography
              variant="h6"
              className="you-text"             
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
        </div>
      </div>
      }

      <YoutubePlayer />

      <div className="map-controls">
        <Button 
          className="back-button" 
          disabled={!!videoShown || world.peek() == AllWorlds} 
          onClick={() => { removeMap(); }} 
          variant="contained" 
          startIcon={<ReplayIcon />}
        >
        Back One Map
        </Button>
      </div>
    </div>
  );
}

export default App;


/*<div className="App">
  <Header />
  <BackgroundImage imageUrl="./wow-map-min.jpg" />
  <Grid container spacing={3} justifyContent="center" alignItems="center">
    {currentQuestion.options.map((q, i) => (
      <Grid item xs={12}>
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea onClick={() => onQuestionSelect(q)}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Option #{i+1}
          </Typography>
          <Typography variant="h5" component="div">
            {worldOfWarcraft[q]?.name}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
    ))}
  </Grid>
  <div id="MainContainer">
    <YoutubePlayer />
  </div>
</div>*/

