import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <Box >
    <Box sx={{display:"flex",border:"1px solid black",mt:1,minWidth:{md:50,xs:30},minHeight:{xs:30},md:70,justifyContent:"center",textAlign:"center"}} id={letterState}>
      {letter}
    </Box>
    </Box>
  );
}

export default Letter;
