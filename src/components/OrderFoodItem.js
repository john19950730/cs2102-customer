import React from 'react';
import { connect } from 'react-redux';

import { foodItemSelectorById } from '../redux/state/order.state';

const connectToRedux = connect((state, { id }) => ({
	foodItem: foodItemSelectorById(id)(state),
}));

const OrderFoodItem = ({ foodItem, quantity }) => (
	<tr className="confirm-row">
		<td className="confirm-name">{foodItem.name}</td>
		<td className="confirm-price">{foodItem.price}</td>
		<td className="confirm-quant">{quantity}</td>
	</tr>
);

export default connectToRedux(OrderFoodItem);
