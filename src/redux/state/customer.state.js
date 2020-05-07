import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { path, omitBy, isEmpty } from 'lodash/fp';

import { login, registerCustomer, updateCustomer } from '../api/apiCalls';

export const SET_CUSTOMER = 'SET_CUSTOMER';
export const SET_CUSTOMER_ORDERS = 'SET_CUSTOMER_ORDERS';
export const TOGGLE_SHOW_ALL_ORDERS = 'TOGGLE_SHOW_ALL_ORDERS';
export const RESET_CUSTOMER = 'RESET_CUSTOMER';

export const loggedInCustomerSelector = path('customer.customer');
export const customerOrdersSelector = path('customer.orders');
export const showAllOrdersSelector = path('customer.showAll');

export const loginWithUsername = (userPass) => (dispatch) => {
	login(userPass)
		.then(res => res.json())
		.then(({ isLoginSuccess, user }) => {
			if (!isLoginSuccess) {
				alert('Login has failed!');
			} else {
				dispatch(setLoggedInCustomer(user));
			}
		})
		.catch(() => alert('Error has occurred during login!'));
};

export const registerNewUser = (newUserValues) => (dispatch) => {
	registerCustomer(newUserValues)
		.then(res => res.json())
		.then(({ error, msg }) => {
			if (error) {
				alert(msg);
			} else {
				alert('Account registration successful, you may login with your username and password now.');
			}
		})
		.catch(() => alert('Error has occurred during registration!'));
};

export const updateUserProfile = (newUserValues) => (dispatch, getState) => {
	const state = getState();
	const customer = loggedInCustomerSelector(state);
	const filteredValues = omitBy(isEmpty)(newUserValues);
	updateCustomer(customer.cid, filteredValues)
		.then(res => res.json())
		.then(({ error, msg }) => {
			if (error) {
				alert(msg);
			} else {
				dispatch(setLoggedInCustomer({ ...customer, ...filteredValues }));
			}
		})
		.catch(() => alert('Error has occurred during update!'));
};

export const fetchCustomerOrders = () => (dispatch, getState) => {
	const state = getState();
	// simulate server activity with test data
	return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
		dispatch(setCustomerOrders([
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
		]));
	});
};

export const setLoggedInCustomer = customer => ({ type: SET_CUSTOMER, payload: customer });
export const setCustomerOrders = orders => ({ type: SET_CUSTOMER_ORDERS, payload: orders });
export const toggleShowAllOrders = () => ({ type: TOGGLE_SHOW_ALL_ORDERS });
export const logoutCustomer = () => ({ type: RESET_CUSTOMER });

const customer = handleAction(
	SET_CUSTOMER,
	(state, { payload }) => payload,
	{},
);

const orders = handleAction(
	SET_CUSTOMER_ORDERS,
	(state, { payload }) => payload,
	[],
);

const showAll = handleAction(
	TOGGLE_SHOW_ALL_ORDERS,
	state => (!state),
	false,
);

const customerReducer = (state, action) => {
	if (action.type === RESET_CUSTOMER) {
		state = undefined;
	}

	return combineReducers({
		customer,
		orders,
		showAll,
	})(state, action);
};

export default customerReducer;
