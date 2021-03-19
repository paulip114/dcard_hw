import React, { useState, useEffect } from 'react';
//import componets
import InfoCard from '../components/InfoCard.jsx';
import Navbar from '../components/Navbar.jsx';
import CityList from '../components/CityList.jsx';
//import axios request
import { getCityRequest } from '../CityRequest.js';
//import styles
import '../App.css';


function City() {

    //使用useState 和 useEffect
    //將從getCityRequest()傳過來的axios promise data 存進 setSceneResults
    const [sceneResults, setSceneResults] = useState([]);
    useEffect(() => {
        getCityRequest().then(setSceneResults);
    }, [setSceneResults]);

    // const [value, setvalue] = useState([]);
    // // handleChange(event) {
    // //     this.setState({value: event.target.value});
    // //   }
    // setvalue("grapefruit");

    return (
        <div className="App">
            <header className="App-header">
                <Navbar NavbarTitle="臺北市" />
                <CityList/>
                {sceneResults.map((infoCard) => (<InfoCard key={infoCard.ID} Name={infoCard.Name} Description={infoCard.Description} Picture={infoCard.Picture.PictureUrl1} />))}
                {/* <div ref={res => (this.scroll = res)}></div> 拉到最底刷新axios request 功能（尚未完成）*/}
                <div className="EndOfInfoCard" />
            </header>
        </div>
    );
}

export default City;



