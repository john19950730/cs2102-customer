import React from 'react';
import './css/restaurants.css';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import RestaurantItem from '../components/RestaurantItem';
import BackToHome from '../components/BackToHome';

import { allRestaurantsSelector, fetchRestaurantsList } from '../redux/state/restaurantFood.state';
import { resetNewOrder } from '../redux/state/order.state';

const connectToRedux = connect(
	state => ({
		restaurants: allRestaurantsSelector(state),
	}),
	dispatch => ({
		loadRestaurantsList: debounce(() => {
			dispatch(fetchRestaurantsList());
		}, 10000, { leading: true, trailing: false }),
		abortOrder: () => {
			dispatch(resetNewOrder());
		},
	}),
);

const Restaurants = ({ hidden, restaurants, loadRestaurantsList, abortOrder }) => {

	loadRestaurantsList();

	return (<div className={`restaurants ${hidden && 'hidden'}`}>
		<div className="restaurants-label">
			<span className="step-number">1</span>RESTAURANTS
		</div>
		<div className="restaurants-intro">
			Here is our selection of food outlets:
		</div>
		<ul className="restaurants-list">
			{restaurants.map(e => (<RestaurantItem key={e.rid} restaurant={e}/>))}
		</ul>
		<div className="bottom-bar">
			<BackToHome onClick={abortOrder} />
		</div>
	</div>);
};

export default connectToRedux(Restaurants);
