import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <Box >
      <Typography variant="h3">
        {gameOver.guessedWord
          ? "You Correctly Guessed the Nerdle"
          : "You Failed to Guess the Word"}
      </Typography>
      <Typography variant="h1">Correct Word: {correctWord}</Typography>
      {gameOver.guessedWord && (
        <Typography variant="h3">You guessed in {currAttempt.attempt} attempts</Typography>
      )}
    </Box>
  );
}

export default GameOver;
