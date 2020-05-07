import React from 'react';
import './css/confirmOrder.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, getFormValues, Field } from 'redux-form';
import { compose, withProps } from 'recompose';
import { find, map, sum } from 'lodash';

import OrderFoodItem from '../components/OrderFoodItem';

import { restaurantFoodItemsSelector } from '../redux/state/restaurantFood.state';
import { orderFoodItemsSelector, resetFoodOrder, postFoodOrder } from '../redux/state/order.state';

const connectToRedux = connect(
	state => ({
		order: orderFoodItemsSelector(state),
		addressSpecial: getFormValues('addressSpecial')(state),
		addressValue: formValueSelector('addressSpecial')(state, 'address'),
		foodItemsList: restaurantFoodItemsSelector(state),
	}),
	dispatch => ({
		amendOrder: () => {
			dispatch(resetFoodOrder());
		},
		confirmOrder: (order, addressSpecial) => () => {
			dispatch(postFoodOrder(order, addressSpecial));
		},
	}),
);

const withReduxForm = reduxForm({
	form: 'addressSpecial',
});

const withTotalPrice = withProps(({ order, foodItemsList }) => ({
	totalPrice: sum(map(order, (v, k) => parseFloat(v) * parseFloat(find(foodItemsList, item => item.fooditemid.toString() === k).price))).toFixed(2),
}));

const ConfirmOrder = ({ hidden, order, addressSpecial, addressValue, totalPrice, amendOrder, confirmOrder }) => (
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
		<div className="confirm-address">
			Deliver Order to: <Field component="input" name="address" />
		</div>
		<div className="confirm-special">
			Special Request for Rider:
			<Field component="input" name="specialRequest" />
		</div>
		<div className="bottom-bar">
			<button className="amend-order" onClick={amendOrder}>Back to Food Items</button>
			{addressValue && <Link to="/done">
				<button className="confirm-order" onClick={confirmOrder(order, addressSpecial)}>Confirm Order</button>
			</Link>}
		</div>
	</div>
);

const enhance = compose(connectToRedux, withReduxForm, withTotalPrice);

export default enhance(ConfirmOrder);
