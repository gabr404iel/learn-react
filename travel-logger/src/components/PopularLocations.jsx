import React from 'react';
import popularLocationsImages from '../assets/popularLocations';
import PopularLocationsData from '../data/popularLocations.json'

export default function PopularLocations() {
  return (
    <div className="popular-locations">
      <div className="popular-locations--texts">
        <p className="popular-locations--title headers">Popular Locations</p>
        <p className="show-more">View all</p>
      </div>
      <div className="popular-locations--list">
        {PopularLocationsData.map((location) => (
          <div className='popular-location--list-item' key={location.id}>
            <div className="popular-location--image-container">
              <img
                className="popular-location--image"
                src={popularLocationsImages[location.photo]}
                alt={location.name}
              />
            </div>
            <p className='popular-location--name'>{location.name}</p>
            <p className='popular-location--location'>{location.located}</p>
          </div>
        ))}
      </div>
    </div>
  );
}