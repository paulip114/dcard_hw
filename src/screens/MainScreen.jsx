import React, { useState, useEffect } from 'react';
//import componets
import InfoCard from '../components/InfoCard.jsx';
import Navbar from '../components/Navbar.jsx';
//import axios request
import { getScenicSpotRequest } from '../ScenicSpotRequest.js';
//import styles
import '../App.css';


function MainScreen() {

  //使用useState 和 useEffect
  //將從getScenicSpotRequest()傳過來的axios promise data 存進 setSceneResults
  const [sceneResults, setSceneResults] = useState([]);
  useEffect(() => {
    getScenicSpotRequest().then(setSceneResults);
  }, [setSceneResults]);

  //拉到最底刷新axios request 功能（尚未完成）
  // const [] = useState();
  // useEffect(() => {
  //   if (this.scroll) {
  //     this.scroll.addEventListener("scroll", res => {
  //       const { clientHeight, scrollHeight, scrollTop } = res.target;
  //       // const { clientHeight, scrollHeight, scrollTop } = this.scroll;

  //       const isBottom = scrollTop + clientHeight + 20 > scrollHeight;
  //       console.log(scrollTop, clientHeight, scrollHeight, isBottom);
  //     });
  //   }
  // });


  return (
    <div className="App">
      <header className="App-header">
        <Navbar NavbarTitle="全部景點列表" />
        {sceneResults.map((infoCard) => (<InfoCard key={infoCard.ID} Name={infoCard.Name} Description={infoCard.Description} Picture={infoCard.Picture.PictureUrl1} />))}
        {/* <div ref={res => (this.scroll = res)}></div> 拉到最底刷新axios request 功能（尚未完成）*/}
      </header>
    </div>
  );
}

export default MainScreen;



