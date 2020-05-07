import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { path } from 'lodash/fp';

import { createNewOrder } from '../api/apiCalls';

import { loggedInCustomerSelector } from './customer.state';

export const SET_RESTAURANT = 'SET_RESTAURANT';
export const SET_FOOD_ORDER = 'SET_FOOD_ORDER';
export const SET_ORDER_COMPLETE = 'SET_ORDER_COMPLETE';
export const RESET_NEW_ORDER = 'RESET_NEW_ORDER';

export const orderRestaurantSelector = path('order.restaurant');
export const orderFoodItemsSelector = path('order.foodItems');
export const orderCompleteSelector = path('order.orderComplete');

export const postFoodOrder = (foodItems, addressSpecial) => (dispatch, getState) => {
	const state = getState();
	const { cid } = loggedInCustomerSelector(state);
	const { rid } = orderRestaurantSelector(state);
	const requestParams = { foodItems, ...addressSpecial, cid, rid };
	createNewOrder(requestParams)
		.then(res => res.json())
		.then(({ error, msg }) => {
			if (error) {
				dispatch(setOrderComplete({ error: true, msg }));
			} else {
				dispatch(setOrderComplete({ complete: true }));
			}
		})
		.catch(() => alert('Error occurred when submitting your order!'));
};

export const setRestaurant = restaurant => ({ type: SET_RESTAURANT, payload: restaurant });
export const setFoodOrder = order => ({ type: SET_FOOD_ORDER, payload: order });
export const resetFoodOrder = () => ({ type: SET_FOOD_ORDER, payload: {} });
export const setOrderComplete = complete => ({ type: SET_ORDER_COMPLETE, payload: complete });
export const resetNewOrder = () => ({ type: RESET_NEW_ORDER });

const restaurant = handleAction(
	SET_RESTAURANT,
	(state, { payload }) => payload,
	{},
);

const foodItems = handleAction(
	SET_FOOD_ORDER,
	(state, { payload }) => payload,
	{},
);

const orderComplete = handleAction(
	SET_ORDER_COMPLETE,
	(state, { payload }) => payload,
	{},
);

const orderReducer = (state, action) => {
	if (action.type === RESET_NEW_ORDER) {
		state = undefined;
	}

	return combineReducers({
		restaurant,
		foodItems,
		orderComplete,
	})(state, action);
}

export default orderReducer;
