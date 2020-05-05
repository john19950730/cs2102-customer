import { handleAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { find, flow, path } from 'lodash/fp';

export const SET_RESTAURANT = 'SET_RESTAURANT';
export const SET_FOOD_ORDER = 'SET_FOOD_ORDER';
export const SET_ORDER_COMPLETE = 'SET_ORDER_COMPLETE';
export const RESET_NEW_ORDER = 'RESET_NEW_ORDER';

export const orderRestaurantSelector = path('order.restaurant');
export const orderFoodItemsSelector = path('order.foodItems');
export const isOrderCompleteSelector = path('order.orderComplete');

export const postFoodOrder = order => dispatch => {
	// simulate server activity
	return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
		dispatch(setOrderComplete(true));
	});
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
	false,
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
