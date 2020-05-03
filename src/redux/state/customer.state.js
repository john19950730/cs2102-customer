import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { path } from 'lodash/fp';

import { login } from '../api/apiCalls';

export const LOGOUT_CUSTOMER = {};

export const loggedInCustomerSelector = path('customer.customer');
export const customerOrdersSelector = path('customer.orders');
export const showAllOrdersSelector = path('customer.showAll');

export const loginWithUsername = ({ username }) => (dispatch) => {
	login({ username })
		.then(res => res.json())
		.then(({ isLoginSuccess, customer }) => {
			if (!isLoginSuccess) {
				alert('Login has failed!');
			} else {
				dispatch(setLoggedInCustomer(customer));
			}
		})
		.catch(() => alert('Error has occurred during login!'));
};

export const registerNewUser = ({ username, name, creditCard }) => (dispatch) => {

};

export const setLoggedInCustomer = customer => ({ type: 'SET_CUSTOMER', customer });
export const setCustomerOrders = orders => ({ type: 'SET_CUSTOMER_ORDERS', orders });
export const toggleShowAllOrders = () => ({ type: 'TOGGLE_SHOW_ALL_ORDERS' });

const customer = handleAction(
	'SET_CUSTOMER',
	(state, { customer }) => customer,
	//LOGOUT_CUSTOMER,
	// test data:
	{
		cid: 'aaaaaa',
		name: 'ASDFGHJKL',
		cc: '5555555555555555',
		joinDate: '29 February 2019',
	},
);

const orders = handleAction(
	'SET_CUSTOMER_ORDERS',
	(state, { orders }) => orders,
	//[],
	// test data:
	[
		{
			id: 'b51',
			address: 'Area 51',
			orderPlaced: '30 February 2020',
			orderDelivered: null,
		},
		{
			id: 'a123',
			address: '123 Sesame Street',
			orderPlaced: '31 September 2019',
			orderDelivered: '32 September 2019',
		},
	],
);

const showAll = handleAction(
	'TOGGLE_SHOW_ALL_ORDERS',
	state => (!state),
	false,
);

export default combineReducers({
	customer,
	orders,
	showAll,
});
