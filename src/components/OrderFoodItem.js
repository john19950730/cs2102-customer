import React from 'react';
import { connect } from 'react-redux';

import { foodItemSelectorById } from '../redux/state/restaurantFood.state';

const connectToRedux = connect((state, { id }) => ({
	foodItem: foodItemSelectorById(parseInt(id))(state),
}));

const OrderFoodItem = ({ foodItem, quantity }) => (
	<tr className="confirm-row">
		<td className="confirm-name">{foodItem.foodname}</td>
		<td className="confirm-price">{parseFloat(foodItem.price).toFixed(2)}</td>
		<td className="confirm-quant">{quantity}</td>
	</tr>
);

export default connectToRedux(OrderFoodItem);
