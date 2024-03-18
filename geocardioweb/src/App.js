import React from 'react';

import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './components/views/dashboard.js'
import SignIn from './components/views/signin.js'
import Root from './components/views/root.js'
import SignUp from './components/views/signup.js'
import Profile from './components/views/profile.js'
import Historics from './components/views/historics.js'
import 'leaflet/dist/leaflet.css';

//Routing views
const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
        <Route path="Dashboard" element={ <Dashboard/> }/>
        <Route path="SignIn" element={ <SignIn/> }/>
        <Route path="SignUp" element={ <SignUp/> }/>
        <Route path="Profile" element={ <Profile/> }/>
        <Route path="Historics" element={ <Historics/>}/>
    </Route>
  ));

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

