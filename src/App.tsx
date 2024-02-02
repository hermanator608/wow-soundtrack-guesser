import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import { YoutubePlayer } from "./components/YoutubePlayer";
import { useRecoilState } from "recoil";
import {
  currentQuestionState,
  getNextQuestion,
  videoShownState
} from "./state";
import { Button, Card, CardActionArea, CardContent, Grid, Typography, styled } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import { worldOfWarcraft } from "./config";

import ImageMapper, { ImageMapperProps, MapAreas } from 'react-img-mapper';
import { AllWorlds, IdToMapObject, azeroth } from "./config/map-details";
import { MapDetails, stackInterface, Stack } from "./config/types";
import { truncate } from "fs";

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

  let imageMapperProps: ImageMapperProps = {
    src: world.peek().img,
    map: world.peek(),
    width: 900,
    height: 600,
    onClick: area => addMap(area),
    onMouseEnter: area => enterArea(area),
    onMouseLeave: area => leaveArea()
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
      evaluateChoice(area.id);
    } else {
      let newStack = Stack.clone(world.getData());
      newStack.push(newMap);
      setWorld(newStack);
    }
    
  }

  const evaluateChoice = (choice: string) => {

    if (choice === currentQuestion.answerName) {
      setWorld(new Stack<MapDetails>(5, AllWorlds));
      alert("Correct!")

      setVideoShown(true);

      setTimeout(() => {
        setVideoShown(false);
        setCurrentQuestion(getNextQuestion());
      }, 5000);
      
    } else {
      alert("incorrect!")
    }
    
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
      ?<></>
      :<div className="photo">
        <ImageMapper {...imageMapperProps} />
      </div>
      }

      <div id="MainContainer">
        <h2>You: {hoverArea}</h2>
        <YoutubePlayer />
        <Button onClick={() => { removeMap(); }} variant="contained" startIcon={<ReplayIcon />}>Back One Map</Button>
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

