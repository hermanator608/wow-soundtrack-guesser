import React from "react";
import Header from "./components/Header";
import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import { YoutubePlayer } from "./components/YoutubePlayer";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  currentQuestionState,
  getNextQuestion,
  videoShownState,
} from "./state";
import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { worldOfWarcraft } from "./config";


function App() {
  const [currentQuestion, setCurrentQuestion] = useRecoilState(currentQuestionState);
  const setVideoShown = useSetRecoilState(videoShownState);

  const onQuestionSelect = (selectedIndex: number) => {
    if (selectedIndex === currentQuestion.answer) {
      alert("Correct!");
      setVideoShown(true);

      setTimeout(() => {
        setVideoShown(false);
        setCurrentQuestion(getNextQuestion());
      }, 5000);
    } else {
      alert("Wrong, try again!");
    }
  };

  return (
    <div className="App">
      <Header />
      <BackgroundImage imageUrl="./wow-map-min.jpg" />
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {currentQuestion.options.map((q, i) => (
          <Grid item xs={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardActionArea onClick={() => onQuestionSelect(q)}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Option #{i + 1}
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
    </div>
  );
}

export default App;
