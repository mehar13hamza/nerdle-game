import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";
import { Box } from '@mui/material';

function Board() {
  return (
    <Box sx={{display:"flex",flexDirection:"column",mt:1,alignItems:"center",boxShadow:1}}>
      
      <Box sx={{display:"flex",flexDirection:"row",minWidth:{xs:"20",md:"40",}}}>
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
        <Letter letterPos={5} attemptVal={0} />
        <Letter letterPos={6} attemptVal={0} />
        <Letter letterPos={7} attemptVal={0} />

      </Box>
      <Box sx={{display:"flex",flexDirection:"row",minWidth:{xs:"20",md:"40"},p:1}}>
        <Letter letterPos={0} attemptVal={1} />
        <Letter letterPos={1} attemptVal={1} />
        <Letter letterPos={2} attemptVal={1} />
        <Letter letterPos={3} attemptVal={1} />
        <Letter letterPos={4} attemptVal={1} />
        <Letter letterPos={5} attemptVal={1} />
        <Letter letterPos={6} attemptVal={1} />
        <Letter letterPos={7} attemptVal={1} />

      </Box>
      <Box sx={{display:"flex",flexDirection:"row",minWidth:{xs:"20",md:"40"},p:1}}>
        <Letter letterPos={0} attemptVal={2} />
        <Letter letterPos={1} attemptVal={2} />
        <Letter letterPos={2} attemptVal={2} />
        <Letter letterPos={3} attemptVal={2} />
        <Letter letterPos={4} attemptVal={2} />
        <Letter letterPos={5} attemptVal={2} />
        <Letter letterPos={6} attemptVal={2} />
        <Letter letterPos={7} attemptVal={2} />
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",minWidth:{xs:"20",md:"40"},p:1}}>
        <Letter letterPos={0} attemptVal={3} />
        <Letter letterPos={1} attemptVal={3} />
        <Letter letterPos={2} attemptVal={3} />
        <Letter letterPos={3} attemptVal={3} />
        <Letter letterPos={4} attemptVal={3} />
        <Letter letterPos={5} attemptVal={3} />
        <Letter letterPos={6} attemptVal={3} />
        <Letter letterPos={7} attemptVal={3} />
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",minWidth:{xs:"20",md:"40"},p:1}}>
        <Letter letterPos={0} attemptVal={4} />
        <Letter letterPos={1} attemptVal={4} />
        <Letter letterPos={2} attemptVal={4} />
        <Letter letterPos={3} attemptVal={4} />
        <Letter letterPos={4} attemptVal={4} />
        <Letter letterPos={5} attemptVal={4} />
        <Letter letterPos={6} attemptVal={4} />
        <Letter letterPos={7} attemptVal={4} />
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",minWidth:{xs:"20",md:"40"},p:1}}>
        <Letter letterPos={0} attemptVal={5} />
        <Letter letterPos={1} attemptVal={5} />
        <Letter letterPos={2} attemptVal={5} />
        <Letter letterPos={3} attemptVal={5} />
        <Letter letterPos={4} attemptVal={5} />
        <Letter letterPos={5} attemptVal={5} />
        <Letter letterPos={6} attemptVal={5} />
        <Letter letterPos={7} attemptVal={5} />

      </Box>
    </Box>
  );
}

export default Board;
