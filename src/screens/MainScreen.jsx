import React, { useState } from 'react';

//import componets
import InfoCard from '../components/InfoCard.jsx';
import Navbar from '../components/Navbar.jsx';
import CityList from '../components/CityList.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
//import axios request
import { getFristScenicSpotRequest, getScenicSpotRequest } from '../Request.js';
//import styles
import '../App.css';


function MainScreen() {

    const [ScenicSpot, setScenicSpot] = useState([])
    // const [PrevScenicSpot, setPrevScenicSpot] = useState([])
    const topNdata = 30
    const [skipNdata, setSkipNdata] = useState(0)
    const [requestTimes, setRequestTimes] = useState(1)
    const [firstRendered, setfirstRender] = useState(false)

    if (firstRendered === false) {
        getFristScenicSpotRequest(topNdata, firstRendered).then(setScenicSpot);
        setfirstRender(true)
        setSkipNdata(requestTimes * 30)
        console.log("first render ended")
    }

    const RequestHandler = () => {
        if (firstRendered === true) {
            // setPrevScenicSpot(ScenicSpot);
            getScenicSpotRequest(topNdata, skipNdata).then(res => {
                setScenicSpot(PrevSpot => {
                    return [...new Set([...PrevSpot, ...res])]
                })
            });
            console.log("sent second request");
            console.log(ScenicSpot)
            setRequestTimes(requestTimes + 1);
            setSkipNdata(requestTimes * 30);
            console.log("requestTimes:", requestTimes);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <Navbar NavbarTitle="全部景點列表" />
                <CityList />
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

// const Request = axios.create({
//     baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/'
// });

// async function getFristScenicSpotRequest(topNdata, firstRendered) {
//     if (firstRendered === false) {
//         try {
//             const item = await Request.get('ScenicSpot', { params: { $top: topNdata, $format: 'JSON' } }).then(response => response.data);
//             console.log("sent Frist request");
//             return item;
//         } catch (err) {
//             console.error(err);
//         }
//     }

// }

// async function getScenicSpotRequest(topNdata, skipNdata) {
//     console.log("skip ScenicSpotRequest:", skipNdata)
//     try {
//         const item = await Request.get('ScenicSpot',
//             {
//                 params: { $top: topNdata, $skip: skipNdata, $format: 'JSON' }
//             })
//             .then(response => response.data)
//         // .catch(e => {
//         //     if (axios.isCancel(e)) return
//         //     setError(true)
//         // });
//         return item;
//     } catch (err) {
//         console.error(err);
//     }
// }

export default MainScreen;






