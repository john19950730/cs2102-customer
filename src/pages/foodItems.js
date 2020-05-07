import React from 'react';
import './css/foodItems.css';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, Field } from 'redux-form';
import { compose, withProps } from 'recompose';
import { debounce } from 'lodash';
import { map, sum, pickBy } from 'lodash/fp';

import FoodItem from '../components/FoodItem';

import {
	restaurantFoodItemsSelector,
	fetchRestaurantFoodItemsList,
} from '../redux/state/restaurantFood.state';
import {
	orderRestaurantSelector,
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
		loadRestaurantFoodItems: debounce(() => {
			dispatch(fetchRestaurantFoodItemsList());
		}, 500, { leading: true, trailing: false }),
		resetOrder: () => {
			dispatch(resetNewOrder());
		},
		confirmOrder: order => () => {
			dispatch(setFoodOrder(pickBy(parseInt)(order)));
		},
	}),
);

const withReduxForm = reduxForm({
	form: 'foodItems',
});

const withRatingColor = withProps(({ restaurant }) => ({
	ratingColorStyle: {
		color: `#${Math.round((10 - parseInt(restaurant.rating)) * 1.5).toString(16)}${Math.round(parseInt(restaurant.rating) * 1.5).toString(16)}2`,
	},
}));

const FoodItems = ({
	hidden,
	restaurant,
	ratingColorStyle,
	foodItemsList,
	orderFormValues,
	loadRestaurantFoodItems,
	resetOrder,
	confirmOrder,
}) => {

	loadRestaurantFoodItems();

	return (<div className={`fooditems ${hidden && 'hidden'}`}>
		<div className="fooditems-label">
			<span className="step-number">2</span>FOOD ITEMS
		</div>
		{!!restaurant.rating && <div className="restaurant-rating">
			Our customers gave this restaurant a rating of: <span className="rating-number" style={ratingColorStyle}>{restaurant.rating}</span> /10
		</div>}
		<div className="fooditems-intro">
			Here is what <span className="restaurant-name">{restaurant.rname}</span> has to offer:
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
			<button className={`order-button ${(!orderFormValues || sum(map(parseInt)(orderFormValues)) === 0) && 'hidden'}`} onClick={confirmOrder(orderFormValues)}>Place Order</button>
		</div>
	</div>);
};

const enhance = compose(
	connectToRedux,
	withReduxForm,
	withRatingColor,
	withProps(console.log),
);

export default enhance(FoodItems);
