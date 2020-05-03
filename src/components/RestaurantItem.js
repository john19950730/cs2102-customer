import React from 'react';

const RestaurantItem = ({ restaurant }) => (
	<li>
		<button className="restaurant-button">{restaurant.name}</button>
	</li>
);

export default RestaurantItem;
