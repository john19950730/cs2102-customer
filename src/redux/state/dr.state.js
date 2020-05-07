import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { path } from 'lodash/fp';

import { login } from '../api/drApiCalls';

export const SET_LOGGED_IN_DELIVERY_RIDER = 'SET_LOGGED_IN_DELIVERY_RIDER';
export const LOGOUT_DELIVERY_RIDER = 'LOGOUT_DELIVERY_RIDER';

export const loggedInDeliveryRiderSelector = path('dr.rider');

export const loginAsDeliveryRider = userPass => dispatch => {
	login(userPass)
		.then(res => res.json())
		.then(({ isLoginSuccess, user }) => {
			if (!isLoginSuccess) {
				alert("Login failed.");
			} else {
				dispatch(setLoggedInDeliveryRider(user));
			}
		})
		.catch(() => alert('Error occurred when logging in!'));
};

export const setLoggedInDeliveryRider = rider => ({ type: SET_LOGGED_IN_DELIVERY_RIDER, payload: rider });

const rider = handleAction(
	SET_LOGGED_IN_DELIVERY_RIDER,
	(state, { payload }) => payload,
	{},
);

const riderReducer = (state, action) => {
	if (action.type === LOGOUT_DELIVERY_RIDER) {
		state = undefined;
	}

	return combineReducers({
		rider,
	})(state, action);
};

export default riderReducer;
