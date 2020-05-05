import React from 'react';
import { connect } from 'react-redux';

import { setRestaurant } from '../redux/state/order.state';

const connectToRedux = connect(null, (dispatch, { restaurant }) => ({
	setAsRestaurant: () => {
		dispatch(setRestaurant(restaurant));
	},
}));

const RestaurantItem = ({ restaurant, setAsRestaurant }) => (
	<li>
		<button className="restaurant-button" onClick={setAsRestaurant}>{restaurant.name}</button>
	</li>
);

export default connectToRedux(RestaurantItem);
