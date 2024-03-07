import React from "react";
import "../App.css";
import { useSetRecoilState } from "recoil";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { gameStartedState, isPlayingState } from "../state";


function StartGame(){
  const setGameStarted = useSetRecoilState(gameStartedState);
  const setIsPlaying = useSetRecoilState(isPlayingState);

  return (
    <Box 
      className="game-started"
      sx={{width: 900, height:600}}
    >
      <Typography
        className="instructions"
        variant="h6"
      >
        Can you guess where in Warcraft you are from the soundtrack alone?<br/>
        Click the button to find out
      </Typography>
      <Button 
        className="start-button" 
        color="primary"
        size="large"
        variant="contained"
        onClick={() => { setGameStarted(true); setIsPlaying(true);}}
      >
        Start
      </Button>
    </Box>
  )
}

export default StartGame;