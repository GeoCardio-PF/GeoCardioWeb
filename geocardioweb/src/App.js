import React from 'react';
import './App.css';
import Container from '@mui/material/Container'
import AppBar from './components/AppBar.js'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CardVariable from './components/CardVariable.js';
import TempVariable from './components/tempVariable'
import SatVariable from './components/satVariable.js';
import PresVariable from './components/presVariable.js';

//App rendering
function App() {
  return (
    <div className='App'>
      <AppBar />
      <Container sx={{ marginY: 3}} >
        <Grid container spacing={2} sx={{display: { xs: 'none', md: 'flex' }}} >

          <PresVariable />
          <CardVariable />
          <TempVariable />
          <SatVariable />
          
        </Grid>
        <Grid container spacing={2} sx={{display: { xs: 'block', md: 'none' }}}>
          <PresVariable />
          <CardVariable />
          <TempVariable />
          <SatVariable />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
