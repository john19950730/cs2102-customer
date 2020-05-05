import React from 'react';
import './css/confirmOrder.css';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { find, map, sum } from 'lodash';

import OrderFoodItem from '../components/OrderFoodItem';

import { orderFoodItemsSelector, restaurantFoodItemsSelector, resetFoodOrder } from '../redux/state/order.state';

const connectToRedux = connect(
	state => ({
		order: orderFoodItemsSelector(state),
		foodItemsList: restaurantFoodItemsSelector(state),
	}),
	dispatch => ({
		amendOrder: () => {
			dispatch(resetFoodOrder());
		},
		confirmOrder: () => {
			// CONFIRM ORDER HANDLER
		},
	}),
);

const withTotalPrice = withProps(({ order, foodItemsList }) => ({
	totalPrice: sum(map(order, (v, k) => parseInt(v) * find(foodItemsList, item => item.id === k).price)),
}));

const ConfirmOrder = ({ hidden, order, totalPrice, amendOrder, confirmOrder }) => (
	<div className={`confirm ${hidden && 'hidden'}`}>
		<div className="confirm-label">
			<span className="step-number">3</span>CONFIRM ORDER
		</div>
		<div className="confirm-intro">
			Please confirm your order below:
		</div>
		<table className="confirm-table">
			<thead>
				<tr>
					<td>Name</td>
					<td>Price</td>
					<td>Quantity</td>
				</tr>
			</thead>
			<tbody>
				{map(order, (v, k) => (<OrderFoodItem key={k} id={k} quantity={v} />))}
			</tbody>
			<tfoot>
				<tr>
					<td>Total Price:</td>
					<td>$</td>
					<td>{totalPrice}</td>
				</tr>
			</tfoot>
		</table>
		<div className="bottom-bar">
			<button className="amend-order" onClick={amendOrder}>Back to Food Items</button>
			<button className="confirm-order" onClick={confirmOrder}>Confirm Order</button>
		</div>
	</div>
);

const enhance = compose(connectToRedux, withTotalPrice);

export default enhance(ConfirmOrder);
