import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { find, filter, flow, path } from 'lodash/fp';

import { getRestaurantList, getRestaurantMenu } from '../api/apiCalls';

import { orderRestaurantSelector } from './order.state';

export const SET_RESTAURANT_LIST = 'SET_RESTAURANT_LIST';
export const SET_FOODITEMS_LIST = 'SET_FOODITEMS_LIST';

export const allRestaurantsSelector = path('restaurantFood.restaurantList');
export const restaurantFoodItemsSelector = path('restaurantFood.foodItemsList');
export const foodItemSelectorById = id => flow(path('restaurantFood.foodItemsList'), find(item => item.fooditemid === id));

export const fetchRestaurantsList = () => dispatch => {
	getRestaurantList()
		.then(res => res.json())
		.then(({ restaurants }) => {
			dispatch(setRestaurantList(restaurants));
		})
		.catch(() => alert('Error occurred when fetching restaurants list!'))
};

const transformFoodItemsList = filter(['itemavailability', 'T']);

export const fetchRestaurantFoodItemsList = () => (dispatch, getState) => {
	const state = getState();
	const { rid } = orderRestaurantSelector(state);
	if (!rid) {
		return dispatch(setFoodItemsList([]));
	}
	return getRestaurantMenu({ rid })
		.then(res => res.json())
		.then(({ foodItems }) => transformFoodItemsList(foodItems))
		.then(filteredFoodItems => {
			dispatch(setFoodItemsList(filteredFoodItems));
		})
		.catch(() => alert('Error occurred when fetching restaurant menu!'));
};

export const setRestaurantList = restaurants => ({ type: SET_RESTAURANT_LIST, payload: restaurants });
export const setFoodItemsList = foodItems => ({ type: SET_FOODITEMS_LIST, payload: foodItems });

const restaurantList = handleAction(
	SET_RESTAURANT_LIST,
	(state, { payload }) => payload,
	[],
);

const foodItemsList = handleAction(
	SET_FOODITEMS_LIST,
	(state, { payload }) => payload,
	[],
);

export default combineReducers({
	restaurantList,
	foodItemsList,
});
