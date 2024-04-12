import React from 'react';
import './App.css';
import {Outlet} from  'react-router-dom';
import Home from "./Components/Home"

function App() {
  return (
    <>
      <Outlet/>
      <Home/>
  </>
  );  
}
export default App;
