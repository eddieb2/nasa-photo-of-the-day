import React from "react";
import "./App.css";
import NasaNavBar from './Components/NavSection/NavBar'
import NasaCardPage from './Components/CardSection/NasaCardPage';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
    <div className="App">
      <NasaNavBar />
      <NasaCardPage />
    </div>
  );
}

export default App;
