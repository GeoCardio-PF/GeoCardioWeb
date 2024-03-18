import React from 'react'
import AppBar from '../elements/AppBar.js'
import Box from '@mui/material/Box';
import PresHistoVariable from '../elements/presHistoVariable.js'
import SatHistoVariable from '../elements/satHistoVariable.js'
import CardHistoVariable from '../elements/cardHistoVariable.js'
import TempHistoVariable from '../elements/tempHistoVariable.js'
import Location from '../elements/location.js'
import 'leaflet/dist/leaflet.css';


export default function historics() {
  return (
    <div>
      <AppBar/>
    <Box
        display='flex'
        justifyContent='center'
        marginY={3}
        gap={4}
      >
        <PresHistoVariable/>
        <CardHistoVariable/>
        <SatHistoVariable/>
        <TempHistoVariable/>
        
    </Box>
    <Location />
    </div>
  )
}
