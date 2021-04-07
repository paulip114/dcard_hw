import React, { useState, useEffect } from 'react';

//import componets
import InfoCard from '../components/InfoCard.jsx';
import Navbar from '../components/Navbar.jsx';
import CityList from '../components/CityList.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getFristScenicSpotRequest, getScenicSpotRequest } from '../CityRequest.js';
//import styles
import '../App.css';


function City() {
    const [selcetedCity, setSelcetedCity] = useState('');
    const [ScenicSpot, setScenicSpot] = useState([])
    const topNdata = 30
    const [skipNdata, setSkipNdata] = useState(0)
    const [requestTimes, setRequestTimes] = useState(1)
    const [firstRendered, setfirstRender] = useState(false)

    if (firstRendered === false) {
        getFristScenicSpotRequest(selcetedCity, topNdata, firstRendered).then(setScenicSpot);
        setfirstRender(true)
        setSkipNdata(requestTimes * 30)
        console.log("first render ended")
    }

    const RequestHandler = () => {
        if (firstRendered === true) {
            // setPrevScenicSpot(ScenicSpot);
            getScenicSpotRequest(selcetedCity, topNdata, skipNdata).then(res => {
                setScenicSpot(PrevSpot => {
                    return [...new Set([...PrevSpot, ...res])]
                })
            });
            console.log("sent second request");
            // console.log(ScenicSpot)
            setRequestTimes(requestTimes + 1);
            setSkipNdata(requestTimes * 30);
            console.log("requestTimes:", requestTimes);
        }
    }

    function handleChildSelect(city) {
        setSelcetedCity(city);
        setfirstRender(false)
        // console.log('this is', selcetedCity)
        // console.log(typeof selcetedCity) 
    }

    return (
        <div className="App">
            <header className="App-header">
                <Navbar NavbarTitle={selcetedCity} />
                <CityList onChildselceted={handleChildSelect} city={selcetedCity} />
                <InfiniteScroll
                    dataLength={ScenicSpot.length}
                    next={RequestHandler}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {ScenicSpot.map((infoCard, index) => (<InfoCard key={index} Name={infoCard.Name} Description={infoCard.Description} Picture={infoCard.Picture.PictureUrl1} />))}
                </InfiniteScroll>

            </header>
        </div>
    );
}

export default City;



