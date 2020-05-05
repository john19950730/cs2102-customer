import React from 'react';
import { connect } from 'react-redux';

import { orderFoodItemsSelector } from '../redux/state/order.state';

const connectToRedux = connect(state => ({
	selectedFoodItems: orderFoodItemsSelector(state),
}));

const FoodItem = ({ foodItem, input }) => (
	<tr className="fooditem-row">
		<td className="fooditem-name">{foodItem.name}</td>
		<td className="fooditem-price">{parseFloat(foodItem.price).toFixed(2)}</td>
		<td className="fooditem-quant">
			<input
				{...input}
				className="fooditem-quant-input"
				type="number"
				id="quantity"
				name="quantity"
				min="0"
				max="99"
			/>
		</td>
	</tr>
);

export default connectToRedux(FoodItem);
