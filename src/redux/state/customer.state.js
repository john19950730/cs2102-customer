import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { path } from 'lodash/fp';

import { login } from '../api/apiCalls';

export const loggedInCustomerSelector = path('customer.customer');

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

const customer = handleAction(
	'SET_CUSTOMER',
	(state, action) => ({
		customer: action.customer,
	}),
	{},
);

export default combineReducers({
	customer,
});
