import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, Field } from 'redux-form';
import { compose, withProps } from 'recompose';

import MenuItem from '../components/MenuItem';

import {
	loggedInRestaurantStaffSelector,
	restaurantSelector,
	restaurantMenuSelector,
	postNewMenuFoodItem,
} from '../redux/state/rs.state';

const connectToRedux = connect(
	state => ({
		newMenu: getFormValues('newMenuItem')(state),
		restaurant: restaurantSelector(state),
		rstaff: loggedInRestaurantStaffSelector(state),
		rmenu: restaurantMenuSelector(state),
	}),
	dispatch => ({
		addFoodItemHandler: values => () => {
			dispatch(postNewMenuFoodItem(values));
		},
	}),
);

const withReduxForm = reduxForm({
	form: 'newMenuItem',
});

const RsMain = ({ restaurant, rstaff, rmenu, newMenu, addFoodItemHandler }) => (
	<div className="rs-main">
		<span className="rs-main-label">Welcome to <span className="rs-name">{restaurant.rname}</span>'s Food Menu Management, you are logged in as: <span className="rs-name">{rstaff.username}</span>.</span>
		<div className="rs-menu">
			<span className="rs-menu-label">Current Food Item Menu:</span>
			<table className="rs-menu-table">
				<thead>
					<tr>
						<td className="fname">Food Name</td>
						<td className="fprice">Price</td>
						<td className="flimit">Daily Limit</td>
						<td className="favail">Availability</td>
					</tr>
				</thead>
				<tbody>
					{rmenu.map(foodItem => (<MenuItem key={foodItem.fooditemid} foodItem={foodItem} />))}
				</tbody>
			</table>
		</div>
		<div className="rs-new">
			<div className="rs-new-header">
				Add Food Item to Menu
			</div>
			<table className="rs-new-form">
				<tbody>
					<tr>
						<td>Food Name</td>
						<td><Field component="input" name="foodname" /></td>
					</tr>
					<tr>
						<td>Price</td>
						<td><Field component="input" name="price" /></td>
					</tr>
					<tr>
						<td>Daily Limit</td>
						<td><Field component="input" type="number" name="daily_limit" /></td>
					</tr>
				</tbody>
			</table>
			<button onClick={addFoodItemHandler(newMenu)}>Add</button>
		</div>
	</div>
);

const enhance = compose(
	connectToRedux,
	withReduxForm,
);

export default enhance(RsMain);
