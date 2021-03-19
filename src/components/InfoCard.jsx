// import React, { useState } from 'react';
import './InfoCard.css';


function InfoCard(props) {

    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <div onClick={handleClick} className="InfoCard">
            <div className="Content-Format">
                <div className="ScenicSpotTourismInfo-Name">{props.Name}</div>
                <div className="ScenicSpotTourismInfo-Description">{props.Description}</div>
                <img className="ScenicSpotTourismInfo-Picture" src={props.Picture} alt="" />
            </div>
        </div>
    )
}

export default InfoCard;
