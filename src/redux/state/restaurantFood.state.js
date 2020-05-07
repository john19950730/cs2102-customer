import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { find, flow, path } from 'lodash/fp';

import { getRestaurantList } from '../api/apiCalls';

import { orderRestaurantSelector } from './order.state';

export const SET_RESTAURANT_LIST = 'SET_RESTAURANT_LIST';
export const SET_FOODITEMS_LIST = 'SET_FOODITEMS_LIST';

export const allRestaurantsSelector = path('restaurantFood.restaurantList');
export const restaurantFoodItemsSelector = path('restaurantFood.foodItemsList');
export const foodItemSelectorById = id => flow(path('restaurantFood.foodItemsList'), find(item => item.id === id));

// simulate server activity with test data
export const fetchRestaurantsList = () => dispatch => {
	getRestaurantList()
		.then(res => res.json())
		.then(({ restaurants }) => {
			dispatch(setRestaurantList(restaurants));
		})
		.catch(() => alert('Error occurred when fetching restaurants list!'))
};

// simulate server activity with test data
export const fetchRestaurantFoodItemsList = () => (dispatch, getState) => {
	const state = getState();
	if (Object.keys(orderRestaurantSelector(state)).length === 0) {
		return [];
	}
	return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
		dispatch(setFoodItemsList([
			{id:'f1', name:'Doughnut', price:'10'},
			{id:'f2', name:'Can of Cola', price:'2.5'},
			{id:'f3', name:'Big Banana Fresh', price:'1.2'},
		]));
	});
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
