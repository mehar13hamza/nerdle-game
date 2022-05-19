import { Box } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <Box sx={{m:1,minWidth:{xs:5,md:60},minHeight:40,boxShadow:1,background:"gray"}}>
    <Box
  sx={{display:"flex",cursor:"pointer",minWidth:50,minHeight:60,alignItems:"center",justifyContent:"center",background:"#404040",color:"white"}}
      id={bigKey ? "{big}" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </Box>
    </Box>
  );
}

export default Key;
