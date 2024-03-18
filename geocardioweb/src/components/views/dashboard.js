import React from 'react';
import AppBar from '../elements/AppBar.js'
import CardVariable from '../elements/CardVariable.js';
import TempVariable from '../elements/tempVariable'
import SatVariable from '../elements/satVariable.js';
import PresVariable from '../elements/presVariable.js';
import LocationDash from '../elements/locationDash.js'
import 'leaflet/dist/leaflet.css';
import Box from '@mui/material/Box';


//Dashboard view rendering
function dashboard() {
  return (
    <div className='App'>
      <AppBar />
      <Box
        display='flex'
        gap={6}
        justifyContent='center'
        marginY={3}
        marginX={6}
      >
        <PresVariable/>
        <CardVariable/>
        <TempVariable/>
        <SatVariable/>
      </Box>
      <LocationDash />
    </div>
  );
}

export default dashboard;
