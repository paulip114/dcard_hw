import React, { useState, useEffect } from 'react';
//import componets
import InfoCard from '../components/InfoCard.jsx';
import Navbar from '../components/Navbar.jsx';
import CityList from '../components/CityList.jsx';
import InfiniteScroll from 'react-infinite-scroller';
//import axios request
import { getScenicSpotRequest } from '../ScenicSpotRequest.js';
import RequestTest from '../RequestTest.js';
//import styles
import '../App.css';


function MainScreen() {

  //使用useState 和 useEffect
  //將從getScenicSpotRequest()傳過來的axios promise data 存進 setSceneResults
  const [sceneResults, setSceneResults] = useState([]);

  useEffect(() => {
    getScenicSpotRequest().then(setSceneResults);
  }, [sceneResults]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar NavbarTitle="全部景點列表" />
        <CityList />
        {sceneResults.map((infoCard) => (<InfoCard key={infoCard.ID} Name={infoCard.Name} Description={infoCard.Description} Picture={infoCard.Picture.PictureUrl1} />))}
      </header>
    </div>
  );
}

export default MainScreen;



