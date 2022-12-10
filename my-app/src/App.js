import './App.css';
import React, { useEffect, useState } from 'react';
import {Route, Switch } from 'react-router-dom'

function App() {

  const [pickUpLines, setPickUpLines] = useState([])
  const [successStories, setSuccessStories] = useState([])
  const url = ("http://localhost:3004/pickuplines")
  const urlFeedBack = ("http://localhost:3004/feedback")
  

  return (
    <div className="App">

    
    </div>
  );
}

export default App;
