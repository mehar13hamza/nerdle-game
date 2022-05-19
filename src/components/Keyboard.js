import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";
import { Box } from '@mui/material';

function Keyboard() {
  const keys1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // const keys2 = ["+", "-", "*", "/", "=", "H", "J", "K", "L"];
  const keys3 = ["+", "-", "*", "/", "=", ];

  const {
    board,
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        // keys2.forEach((key) => {
        //   if (event.key.toLowerCase() === key.toLowerCase()) {
        //     onSelectLetter(key);
        //   }
        // });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  console.log(disabledLetters);
  return (
    <Box sx={{width:{md:"100%",xs:"60%"},height:{xs:"80%",md:"50%"},p:5,mt:8,ml:2,boxShadow:"1",color:"white",}}>
    <Box  onKeyDown={handleKeyboard}  >
      <Box  sx={{display:"flex",flexDirection:"row",justifyContent:"center",}}>
        {keys1.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </Box>
      {/* <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        {keys2.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </Box> */}
      <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyVal={"DELETE"} bigKey />
      </Box>
    </Box>
    </Box>
  );
}

export default Keyboard;
