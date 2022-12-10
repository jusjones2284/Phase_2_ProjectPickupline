import './App.css';
import React, { useEffect, useState } from 'react';
import {Route, Switch } from 'react-router-dom'

function App() {

  const [pickUpLines, setPickUpLines] = useState([])
  const [successStories, setSuccessStories] = useState([])
  const url = ("http://localhost:3004/pickuplines")
  const urlFeedBack = ("http://localhost:3004/feedback")

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setPickUpLines(data))
  }, [])

  useEffect(()=>{

    fetch(urlFeedBack)
    .then(res => res.json())
    .then(data => setSuccessStories(data))

 },[])

  return (
    <div>
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/newpickupline">
        <NewPickUpLineForm handleNewLine={handleNewLine} />
      </Route>
      <Route exact path="/success">
        <Success successStories={successStories}/>
      </Route>

      <Route exact path="/allpickuplines">
        <AllPickUpLines pickUpLines={pickUpLines}  />
      </Route>
      {/* <PickUpLinesContainer pickUpLines={pickUpLines}/> */}
    </Switch>
     </div>
  );
}

export default App;
