import React from 'react';
import './css/newOrder.css';
import { connect } from 'react-redux';
import { withProps, compose } from 'recompose';

import withLoginCheck from '../components/hoc/withLoginCheck';
import Layout from '../components/Layout';
import Restaurants from './restaurants';
import FoodItems from './foodItems';
import ConfirmOrder from './confirmOrder';

import { loggedInCustomerSelector } from '../redux/state/customer.state';
import { orderRestaurantSelector, orderFoodItemsSelector } from '../redux/state/order.state';

const connectToRedux = connect(state => ({
	customer: loggedInCustomerSelector(state),
	restaurant: orderRestaurantSelector(state),
	foodItems: orderFoodItemsSelector(state),
}));

const withStepsDone = withProps(({ restaurant, foodItems }) => ({
	hasSelectedRestaurant: Object.keys(restaurant).length > 0,
	hasSelectedFoodItems: Object.keys(foodItems).length > 0,
}));

const NewOrder = ({ hasSelectedRestaurant, hasSelectedFoodItems }) => (
	<Layout>
		<Restaurants hidden={hasSelectedRestaurant || hasSelectedFoodItems} />
		<FoodItems hidden={!hasSelectedRestaurant || hasSelectedFoodItems} />
		<ConfirmOrder hidden={!hasSelectedRestaurant || !hasSelectedFoodItems} />
	</Layout>
);

const enhance = compose(connectToRedux, //withLoginCheck(false), 
	withStepsDone);

export default enhance(NewOrder);
