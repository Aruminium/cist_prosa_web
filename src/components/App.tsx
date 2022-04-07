import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import logo from '../logo.svg';
import '../static/css/App.css';
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <h1>Topページ</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
