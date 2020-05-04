import React from 'react';
import './css/restaurants.css';

import RestaurantItem from '../components/RestaurantItem';
import BackToHome from '../components/BackToHome';

const Restaurants = () => (
	<div className="restaurants">
		<div className="restaurants-label">
			<span className="step-number">1</span>RESTAURANTS
		</div>
		<ul className="restaurants-list">
			{[{name:'McDunkin'}, {name:'Doughnalds'}].map(e => (<RestaurantItem restaurant={e}/>))}
		</ul>
		<div className="bottom-bar">
			<BackToHome />	
		</div>
	</div>
);

export default Restaurants;
