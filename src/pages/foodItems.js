import React from 'react';
import './css/foodItems.css';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, Field } from 'redux-form';
import { compose } from 'recompose';

import FoodItem from '../components/FoodItem';

import {
	orderRestaurantSelector,
	restaurantFoodItemsSelector,
	setFoodOrder,
	resetNewOrder,
} from '../redux/state/order.state';

const connectToRedux = connect(
	state => ({
		orderFormValues: getFormValues('foodItems')(state),
		restaurant: orderRestaurantSelector(state),
		foodItemsList: restaurantFoodItemsSelector(state),
	}),
	dispatch => ({
		resetOrder: () => {
			dispatch(resetNewOrder());
		},
		confirmOrder: order => () => {
			dispatch(setFoodOrder(order));
		},
	}),
);

const withReduxForm = reduxForm({
	form: 'foodItems',
});

const FoodItems = ({ restaurant, foodItemsList, orderFormValues, resetOrder, confirmOrder }) => (
	<div className="fooditems">
		<div className="fooditems-label">
			<span className="step-number">2</span>FOOD ITEMS
		</div>
		<div className="fooditems-intro">
			Here is what <span className="restaurant-name">{restaurant.name}</span> has to offer:
		</div>
		<table className="fooditems-table">
			<thead>
				<tr>
					<td>Name</td>
					<td>Price</td>
					<td>Quantity</td>
				</tr>
			</thead>
			<tbody>
				{foodItemsList.map(item => (<Field
					key={item.id}
					name={item.id}
					component={FoodItem}
					props={{ foodItem: item }}
				/>))}
			</tbody>
		</table>
		<div className="bottom-bar">
			<button className="back-restaurants" onClick={resetOrder}>Back to Restaurants</button>
			<button className="confirm-order" onClick={confirmOrder(orderFormValues)}>Confirm Order</button>
		</div>
	</div>
);

const enhance = compose(
	connectToRedux,
	withReduxForm,
);

export default enhance(FoodItems);
