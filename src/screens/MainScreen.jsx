import React, { useState, useEffect } from 'react';
//import componets
import InfoCard from '../components/InfoCard.jsx';
import Navbar from '../components/Navbar.jsx';
import { getScenicSpotRequest } from '../request test.js';
//import styles
import '../App.css';


function MainScreen() {

  const [sceneResults, setSceneResults] = useState([]);
  useEffect(() => {
    getScenicSpotRequest().then(setSceneResults);
  }, [setSceneResults]); 

  return (
    <div className="App">
      <header className="App-header">
        <Navbar NavbarTitle="全部景點列表" />
        {sceneResults.map((infoCard) => (<InfoCard key={infoCard.ID} Name={infoCard.Name} Description={infoCard.Description} Picture={infoCard.Picture.PictureUrl1} />))}
      </header>
    </div>
  );
}

export default MainScreen;



