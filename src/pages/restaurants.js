import React from 'react';
import './css/restaurants.css';
import { connect } from 'react-redux';

import RestaurantItem from '../components/RestaurantItem';
import BackToHome from '../components/BackToHome';

import { allRestaurantsSelector, resetNewOrder } from '../redux/state/order.state';

const connectToRedux = connect(
	state => ({
		restaurants: allRestaurantsSelector(state),
	}),
	dispatch => ({
		abortOrder: () => {
			dispatch(resetNewOrder());
		},
	}),
);

const Restaurants = ({ restaurants, abortOrder }) => (
	<div className="restaurants">
		<div className="restaurants-label">
			<span className="step-number">1</span>RESTAURANTS
		</div>
		<ul className="restaurants-list">
			{restaurants.map(e => (<RestaurantItem key={e.id} restaurant={e}/>))}
		</ul>
		<div className="bottom-bar">
			<BackToHome onClick={abortOrder} />	
		</div>
	</div>
);

export default connectToRedux(Restaurants);
