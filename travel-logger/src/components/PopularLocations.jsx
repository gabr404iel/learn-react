import React from 'react';
import categoriesIcons from '../assets/categories-icons/index.js';
import categories from '../data/categories.json'

export default function PopularLocations(){
    return(
        <div className="popular-locations">
        <div className="popular-locations--texts">
          <p className="popular-locations--title headers">Popular Locations</p>
          <p className="show-more">View all</p>
        </div>
        <div className="categories--list">
          {categories.map((category) => (
            <div className='categories--category-card' key={category.id}>
              <img src={categoriesIcons[category.icon]} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
}