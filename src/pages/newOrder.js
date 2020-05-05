import React from 'react';
import './css/newOrder.css';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import Restaurants from './restaurants';
import FoodItems from './foodItems';

import { orderRestaurantSelector, orderFoodItemsSelector } from '../redux/state/order.state';

const connectToRedux = connect(state => ({
	restaurant: orderRestaurantSelector(state),
	foodItems: orderFoodItemsSelector(state),
}));

const NewOrder = ({ restaurant }) => (
	<Layout>
		{Object.keys(restaurant).length === 0 && <Restaurants />}
		{Object.keys(restaurant).length > 0 && <FoodItems />}
	</Layout>
);

export default connectToRedux(NewOrder);
