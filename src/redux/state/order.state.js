import { handleAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { path } from 'lodash/fp';

export const SET_RESTAURANT = 'SET_RESTAURANT';
export const UNSET_RESTAURANT = 'UNSET_RESTAURANT';
export const ADD_FOOD_ITEM = 'ADD_FOOD_ITEM';
export const REMOVE_FOOD_ITEM = 'REMOVE_FOOD_ITEM';

export const orderRestaurantSelector = path('order.restaurant');
export const orderFoodItemsSelector = path('order.foodItems');

export const setRestaurant = restaurant => ({ type: SET_RESTAURANT, payload: restaurant });
export const unsetRestaurant = () => ({ type: UNSET_RESTAURANT });
export const addFoodItem = (item, quant) => ({ type: ADD_FOOD_ITEM, payload: { item, quant } });
export const removeFoodItem = (item) => ({ type: REMOVE_FOOD_ITEM, payload: item });

const restaurant = handleAction(
	SET_RESTAURANT,
	(state, { payload }) => payload,
	{},
);

const foodItems = handleActions(
	{
		[ADD_FOOD_ITEM]: (state, { payload }) => [...state, payload],
		[REMOVE_FOOD_ITEM]: (state, { payload }) => state.filter(({ item }) => item.foodItemId !== payload.item.foodItemId),
	},
	[],
);

const orderReducer = (state, action) => {
	if (action.type === UNSET_RESTAURANT) {
		state = undefined;
	}

	return combineReducers({
		restaurant,
		foodItems,
	})(state, action);
}

export default orderReducer;
