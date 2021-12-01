import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import TracksContainer from './components/TracksContainer';

function App() {

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Ding Dang Application`;
  })

  return (
    <div id="main"> 
      <h1>DBDM</h1>
      <TracksContainer />
    </div>
  );
}

export default hot(module)(App);