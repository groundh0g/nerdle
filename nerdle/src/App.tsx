import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./games/nerdle/NavBar";
// import {DoActionFunction} from './games/Types'
import NerdleGame from "./games/nerdle/NerdleGame";

const toggleSettingsPopup = () => { /**/ };
const toggleMenuPopup = () => { /**/ };

function App() {
  return (
    <div className="App">
      <NavBar
          toggleSettingsPopup={toggleSettingsPopup}
          toggleMenuPopup={toggleMenuPopup}
          key={1} />


      <NerdleGame />

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

    </div>
  );
}

export default App;
