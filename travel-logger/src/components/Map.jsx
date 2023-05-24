import React from 'react';
import mapImg from '../assets/map.svg'

export default function Map(){
    return (
        <div className="map">
            <div className="map--texts">
                <p className="map--title headers">Maps</p>
            </div>
            <div className="map-img">
                <img src={mapImg} alt="map" />
            </div>
        </div>
      );
}
